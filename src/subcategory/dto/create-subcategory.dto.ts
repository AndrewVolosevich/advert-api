import { IsOptional, IsString } from 'class-validator';

export class CreateSubcategoryDto {
  @IsString()
  title: string;

  @IsString()
  alias: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  rubricId: string;

  @IsString()
  @IsOptional()
  categoryId: string;
}
