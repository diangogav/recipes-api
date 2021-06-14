import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryInput: CreateCategoryInput) {
    const category = this.categoryRepository.create(createCategoryInput);
    return this.categoryRepository.save(category);
  }

  async getAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOne(id, {
      relations: ['recipes'],
    });
    if (!category) throw new NotFoundException('CATEGORY_NOT_FOUND');
    return category;
  }

  async update(updateCategoryInput: UpdateCategoryInput) {
    const { affected } = await this.categoryRepository.update(
      { id: updateCategoryInput.id },
      { ...updateCategoryInput },
    );
    if (!affected) throw new NotFoundException('CATEGORY_NOT_FOUND');
    return this.categoryRepository.create(updateCategoryInput);
  }

  async delete(id: string) {
    const category = await this.categoryRepository.findOne({ id });
    if (!category) return false;
    await this.categoryRepository.remove(category);
    return true;
  }
}
