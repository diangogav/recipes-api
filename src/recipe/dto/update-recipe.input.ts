import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, MinLength, ValidateIf } from 'class-validator';

@InputType()
export class UpdateRecipeInput {
  @IsUUID('4')
  @Field()
  id: string;

  @ValidateIf((field) => field.hasOwnProperty('name'))
  @MinLength(1)
  @Field({ nullable: true })
  name: string;

  @ValidateIf((field) => field.hasOwnProperty('description'))
  @Field({ nullable: true })
  @MinLength(1)
  description?: string;

  @ValidateIf((field) => field.hasOwnProperty('ingredients'))
  @MinLength(1, { each: true })
  @Field(() => [String], { nullable: true })
  ingredients?: string[];
}
