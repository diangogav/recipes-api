import { Field, InputType } from '@nestjs/graphql';

@InputType()
class Where {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  userId?: string;
}

@InputType()
export class RecipeFilter {
  @Field(() => Where, { nullable: true })
  where?: Where;
}
