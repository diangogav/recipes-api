import { Field, InputType } from '@nestjs/graphql';
import { IsUUID, MinLength, ValidateIf } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @IsUUID('4')
  @Field()
  id: string;

  @ValidateIf((field) => field.hasOwnProperty('name'))
  @MinLength(1)
  @Field()
  name: string;
}
