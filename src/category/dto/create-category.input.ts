import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @MinLength(1)
  @Field()
  name: string;
}
