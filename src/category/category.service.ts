import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryModel } from './model/category.model';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { HttpMessages } from '../common/http-messages';
import { UpdateCategoryDto } from '../rubric/dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(CategoryModel.name)
    private readonly categoryModel: Model<CategoryModel>,
  ) {}

  async createCategory(dto: CreateCategoryDto) {
    const category = await this.categoryModel.create(dto);

    if (!category) {
      throw new HttpException(
        HttpMessages.ALREADY_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }

    return category;
  }
  async updateCategory(dto: UpdateCategoryDto, id: string) {
    const category = await this.categoryModel
      .findByIdAndUpdate(id, dto, {
        new: true,
      })
      .exec();

    if (!category) {
      throw new HttpException(HttpMessages.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    return category;
  }
  async deleteCategory(id: string) {
    const deletedCategory = await this.categoryModel
      .findByIdAndDelete(id)
      .exec();

    if (!deletedCategory) {
      throw new HttpException(HttpMessages.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    return deletedCategory;
  }
}
