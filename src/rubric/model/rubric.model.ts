import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RubricDocument = HydratedDocument<RubricModel>;

@Schema({ timestamps: true, _id: true })
export class RubricModel {
  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop({ unique: true })
  alias: string;
}

export const RubricSchema = SchemaFactory.createForClass(RubricModel);
