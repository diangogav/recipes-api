import { Field, ObjectType } from '@nestjs/graphql';
import { RecipeType } from '../recipe/recipe.type';

@ObjectType('Category')
export class CategoryType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [RecipeType])
  recipes: RecipeType[];
}
