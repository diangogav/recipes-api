import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CategoryType } from './category.type';
import { CreateCategoryInput } from './dto/create-category.input';
import { CategoryService } from './category.service';
import { UpdateCategoryInput } from './dto/update-category.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-jwt-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => CategoryType)
  getOneCategory(@Args('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [CategoryType])
  getCategories() {
    return this.categoryService.getAll();
  }

  @Mutation(() => CategoryType)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Mutation(() => CategoryType)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(updateCategoryInput);
  }

  @Mutation(() => Boolean)
  deleteCategory(@Args('id') id: string) {
    return this.categoryService.delete(id);
  }
}
