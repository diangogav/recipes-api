import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryType } from '../category/category.type';
import { UserType } from '../user/user.type';

@ObjectType('Recipe')
export class RecipeType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  ingredients: string[];

  @Field(() => CategoryType)
  category: CategoryType;

  @Field(() => UserType)
  user: UserType;
}
