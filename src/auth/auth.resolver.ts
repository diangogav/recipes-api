import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlLocalAuthGuard } from './guards/gql-local-auth-guard';
import { GqlAuthGuard } from './guards/gql-jwt-auth-guard';
import { LoginInput } from './login.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user-decorator';
import { User } from 'src/user/user.entity';
import { LoginType } from './login.type';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(GqlLocalAuthGuard)
  @Mutation(() => LoginType)
  async login(
    @Args('loginInput') _loginInput: LoginInput,
    @CurrentUser() user: User,
  ) {
    return this.authService.login(user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async protected() {
    return 'Hola mundo';
  }
}
