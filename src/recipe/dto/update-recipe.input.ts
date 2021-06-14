import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, MinLength } from 'class-validator';

@InputType()
export class UpdateRecipeInput {
  @IsUUID('4')
  @Field()
  id: string;

  @MinLength(1)
  @Field({ nullable: true })
  name: string;

  @MinLength(1)
  @Field({ nullable: true })
  description?: string;

  @MinLength(1, { each: true })
  @Field(() => [String], { nullable: true })
  ingredients?: string[];
}
