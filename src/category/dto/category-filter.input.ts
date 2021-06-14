import { Field, InputType } from '@nestjs/graphql';

@InputType()
class WhereCategoryFields {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@InputType()
export class CategoryFilter {
  @Field(() => WhereCategoryFields, { nullable: true })
  where?: WhereCategoryFields;
}
