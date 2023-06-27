import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RubricModel } from '../../rubric/model/rubric.model';

export type CategoryDocument = HydratedDocument<CategoryModel>;

@Schema({ timestamps: true, _id: true })
export class CategoryModel {
  @Prop()
  title: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  description?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: RubricModel.name })
  rubricId: Types.ObjectId;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryModel);
