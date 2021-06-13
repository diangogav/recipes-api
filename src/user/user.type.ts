import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
