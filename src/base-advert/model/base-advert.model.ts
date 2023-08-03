import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RubricModel } from '../../rubric/model/rubric.model';
import { CategoryModel } from "../../category/model/category.model";
import { SubcategoryModel } from "../../subcategory/model/subcategory.model";
import { UserModel } from "../../user/model/user.model";

export type BaseAdvertDocument = HydratedDocument<BaseAdvertModel>;

@Schema({ timestamps: true, _id: true })
export class BaseAdvertModel {
  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: RubricModel.name })
  rubricId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CategoryModel.name })
  categoryId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: SubcategoryModel.name })
  subcategoryId: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UserModel.name })
  userId: Types.ObjectId;
}

export const BaseAdvertSchema = SchemaFactory.createForClass(BaseAdvertModel);
