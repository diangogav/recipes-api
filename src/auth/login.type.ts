import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Login')
export class LoginType {
  @Field()
  access_token: string;
}
