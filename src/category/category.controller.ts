import {
  Body,
  Controller,
  Delete,
  Inject,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { IdValidationPipe } from '../global/pipes/id-validation.pipe';
import { UpdateCategoryDto } from '../rubric/dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(
    @Inject(CategoryService) private readonly categoryService: CategoryService,
  ) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateCategory(
    @Body() dto: UpdateCategoryDto,
    @Param('id', IdValidationPipe) id: string,
  ) {
    return this.categoryService.updateCategory(dto, id);
  }

  @Delete(':id')
  async deleteCategory(@Param('id', IdValidationPipe) id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
