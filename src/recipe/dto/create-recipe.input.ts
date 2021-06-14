import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @MinLength(1)
  @Field()
  name: string;

  @MinLength(1)
  @Field()
  description: string;

  @MinLength(1, { each: true })
  @Field(() => [String])
  ingredients: string[];

  @IsUUID('4')
  @Field()
  categoryId: string;
}
