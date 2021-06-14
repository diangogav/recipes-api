import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { RecipeModule } from './recipe/recipe.module';
import { Category } from './category/category.entity';
import { Recipe } from './recipe/recipe.entity';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

console.log('process.env.DATABASE_HOST', process.env.DATABASE_HOST);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ssl: process.env.NODE_ENV === 'production',
      extra: {
        ssl:
          process.env.NODE_ENV === 'production'
            ? { rejectUnauthorized: false }
            : null,
      },
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: [User, Category, Recipe],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
        };
        return graphQLFormattedError;
      },
      playground: true,
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
