import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, MinLength } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @IsUUID('4')
  @Field()
  id: string;

  @MinLength(1)
  @Field()
  name: string;
}
