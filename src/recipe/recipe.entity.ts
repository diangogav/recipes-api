import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';

@Entity('recipe')
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  name: string;

  @Column()
  description: string;

  @Column({ type: String, array: true })
  ingredients: string[];

  @Column()
  categoryId: string;

  @ManyToOne(() => Category, (category) => category.recipes, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.recipes)
  user: User;
}
