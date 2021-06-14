import {
  Args,
  Mutation,
  Query,
  Resolver,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { RecipeService } from './recipe.service';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { RecipeType } from './recipe.type';
import { CategoryType } from '../category/category.type';
import { Recipe } from './recipe.entity';
import { UserType } from '../user/user.type';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { RecipeFilter } from './dto/recipe-filter.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-jwt-auth-guard';
import { CurrentUserFromJWT } from 'src/auth/decorators/current-user-jwt-decorator';
import { User } from 'src/user/user.entity';

@Resolver(() => RecipeType)
export class RecipeResolver {
  constructor(private recipeService: RecipeService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => RecipeType)
  getOneRecipe(@Args('recipeFilter') recipeFilter: RecipeFilter) {
    return this.recipeService.findOne(recipeFilter);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [RecipeType])
  getRecipes(
    @Args('recipeFilter', { nullable: true }) recipeFilter: RecipeFilter,
  ) {
    return this.recipeService.findAll(recipeFilter);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [RecipeType])
  getMyRecipes(@CurrentUserFromJWT() user: User) {
    return this.recipeService.findAll({ where: { userId: user.id } });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RecipeType)
  createRecipe(
    @CurrentUserFromJWT() user: User,
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ) {
    return this.recipeService.create(user.id, createRecipeInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RecipeType)
  updateRecipe(
    @Args('updateRecipeInput') updateRecipeInput?: UpdateRecipeInput,
  ) {
    return this.recipeService.update(updateRecipeInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  deleteRecipe(@Args('id') id: string) {
    return this.recipeService.delete(id);
  }

  @ResolveField(() => CategoryType)
  category(@Parent() recipe: Recipe) {
    return this.recipeService.getCategory(recipe.categoryId);
  }

  @ResolveField(() => UserType)
  user(@Parent() recipe: Recipe) {
    return this.recipeService.getUser(recipe.userId);
  }
}
