import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field()
  name: string;

  @MinLength(8)
  @Field()
  password: string;

  @IsEmail()
  @Field()
  email: string;
}
