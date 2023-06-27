import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ILoginType, IUserRole } from './types';

export type UserDocument = HydratedDocument<UserModel>;

@Schema({ timestamps: true, _id: true })
export class UserModel {
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop({ enum: ILoginType })
  loginType: ILoginType;

  @Prop({ enum: IUserRole })
  role: IUserRole;

  @Prop()
  location?: string;

  @Prop()
  phone?: string;

  @Prop()
  marketDescription?: string;

  @Prop()
  rating?: number;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
