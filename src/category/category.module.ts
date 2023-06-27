import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModel, CategorySchema } from './model/category.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryModel.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
