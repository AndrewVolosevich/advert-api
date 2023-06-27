import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
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
}
