import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  ingredients: string[];

  @Field()
  categoryId: string;

  @Field()
  userId: string;
}
