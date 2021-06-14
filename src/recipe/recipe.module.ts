import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeResolver } from './recipe.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { CategoryModule } from 'src/category/category.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe]), CategoryModule, UserModule],
  providers: [RecipeService, RecipeResolver],
})
export class RecipeModule {}
