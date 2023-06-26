import { ILoginType, IUserRole } from '../model/types';
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsEnum(ILoginType)
  loginType: ILoginType;

  @IsEnum(IUserRole)
  role: IUserRole;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  marketDescription?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;
}
