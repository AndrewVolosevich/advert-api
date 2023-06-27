import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RubricModel } from './model/rubric.model';
import { Model } from 'mongoose';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { HttpMessages } from '../common/http-messages';

@Injectable()
export class RubricService {
  constructor(
    @InjectModel(RubricModel.name)
    private readonly rubricModel: Model<RubricModel>,
  ) {}

  async createRubric(dto: CreateRubricDto) {
    const rubric = await this.rubricModel.create(dto);

    if (!rubric) {
      throw new HttpException(
        HttpMessages.ALREADY_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }

    return rubric;
  }
  async updateRubric(dto: CreateRubricDto, id: string) {
    const updatedRubric = await this.rubricModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    if (!updatedRubric) {
      throw new HttpException(HttpMessages.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    return updatedRubric;
  }
  async deleteRubric(id: string) {
    const deletedRubric = await this.rubricModel.findByIdAndDelete(id).exec();

    if (!deletedRubric) {
      throw new HttpException(HttpMessages.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    return deletedRubric;
  }

  async getAllRubricsWithCategories() {
    return await this.rubricModel
      .aggregate()
      .match({})
      .sort({ _id: 1 })
      .lookup({
        from: 'categorymodels',
        localField: '_id',
        foreignField: 'rubricId',
        as: 'categories',
      })
      .exec();
  }
}
