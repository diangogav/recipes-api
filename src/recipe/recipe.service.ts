import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { CategoryService } from '../category/category.service';
import { Category } from 'src/category/category.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { RecipeFilter } from './dto/recipe-filter.input';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
    private categoryService: CategoryService,
    private userService: UserService,
  ) {}

  async create(
    userId: string,
    createRecipeInput: CreateRecipeInput,
  ): Promise<Recipe> {
    const recipe = this.recipeRepository.create({
      ...createRecipeInput,
      userId,
    });
    return this.recipeRepository.save(recipe);
  }

  async findAll(recipeFilter: RecipeFilter) {
    const filter = {
      ...(recipeFilter?.where && { where: recipeFilter.where }),
    };

    return this.recipeRepository.find(JSON.parse(JSON.stringify(filter)));
  }

  async findOne(recipeFilter: RecipeFilter): Promise<Recipe> {
    const filter = {
      ...(recipeFilter?.where && { where: recipeFilter.where }),
    };

    const recipe = await this.recipeRepository.findOne(
      JSON.parse(JSON.stringify(filter)),
    );
    if (!recipe) throw new NotFoundException('RECIPE_NOT_FOUND');
    return recipe;
  }

  async getCategory(categoryId: string): Promise<Category> {
    const category = await this.categoryService.findOne({
      where: { id: categoryId },
    });
    if (!category) throw new NotFoundException('RECIPE_NOT_FOUND');
    return category;
  }

  async getUser(userId: string): Promise<User> {
    const user = await this.userService.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('USER_NOT_FOUND');
    return user;
  }

  async update(updateRecipeInput: UpdateRecipeInput) {
    const { affected } = await this.recipeRepository.update(
      { id: updateRecipeInput.id },
      { ...updateRecipeInput },
    );

    if (!affected) throw new NotFoundException('RECIPE_NOT_FOUND');

    return true;
  }

  async delete(id: string) {
    const { affected } = await this.recipeRepository.delete(id);
    if (!affected) throw new NotFoundException('RECIPE_NOT_FOUND');
    return id;
  }
}
