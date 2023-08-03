import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RubricModel } from '../../rubric/model/rubric.model';

export type SubcategoryDocument = HydratedDocument<SubcategoryModel>;

@Schema({ timestamps: true, _id: true })
export class SubcategoryModel {
  @Prop()
  title: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  description?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: RubricModel.name })
  rubricId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: RubricModel.name })
  categoryId: Types.ObjectId;
}

export const SubcategorySchema = SchemaFactory.createForClass(SubcategoryModel);
