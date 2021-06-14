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

  async create(createRecipeInput: CreateRecipeInput): Promise<Recipe> {
    const recipe = this.recipeRepository.create(createRecipeInput);
    return this.recipeRepository.save(recipe);
  }

  async findAll(recipeFilter: RecipeFilter) {
    const filter = {
      ...(recipeFilter.where && { where: recipeFilter.where }),
    };

    return this.recipeRepository.find(JSON.parse(JSON.stringify(filter)));
  }

  async findOne(id: string): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne(id);
    if (!recipe) throw new NotFoundException('Recipe_Not_Found');
    return recipe;
  }

  async getCategory(categoryId: string): Promise<Category> {
    return this.categoryService.findOne(categoryId);
  }

  async getUser(userId: string): Promise<User> {
    return this.userService.findOne({ where: { id: userId } });
  }

  async update(updateRecipeInput: UpdateRecipeInput) {
    const { affected } = await this.recipeRepository.update(
      { id: updateRecipeInput.id },
      { ...updateRecipeInput },
    );

    if (!affected) throw new NotFoundException('Category_Not_Found');

    return this.recipeRepository.create(updateRecipeInput);
  }

  async delete(id: string) {
    const { affected } = await this.recipeRepository.delete(id);
    if (!affected) throw new NotFoundException('RECIPE_NOT_FOUND');
    return id;
  }
}
