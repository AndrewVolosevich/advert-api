import { IsOptional, IsString } from 'class-validator';

export class UpdateSubcategoryDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  alias: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  rubricId: string;

  @IsString()
  @IsOptional()
  categoryId: string;
}
