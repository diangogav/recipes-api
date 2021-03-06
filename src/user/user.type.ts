import { Field, ObjectType } from '@nestjs/graphql';
import { RecipeType } from '../recipe/recipe.type';

@ObjectType('User')
export class UserType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [RecipeType])
  recipes: RecipeType[];
}
