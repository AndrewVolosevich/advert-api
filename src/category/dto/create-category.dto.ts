import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  title: string;

  @IsString()
  alias: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  rubricId: string;
}
