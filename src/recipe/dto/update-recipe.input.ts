import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateRecipeInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  ingredients?: string[];

  // @Field()
  // categoryId: string;

  // @Field()
  // userId: string;
}
