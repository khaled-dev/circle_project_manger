import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) : Promise<Category> {
    return await this.categoryRepository.save(
      this.categoryRepository.create(createCategoryDto)
    )
  }

  async findAll() : Promise<Category[]>{
    return await this.categoryRepository.find()
  }

  async findOne(id: number) : Promise<Category> {
    return await this.categoryRepository.findOne({ where: {id} })
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) : Promise<UpdateResult> {
    return await this.categoryRepository.update(id, updateCategoryDto)
  }

  async remove(id: number) : Promise<DeleteResult>  {
    return await this.categoryRepository.delete(id)
  }
}
