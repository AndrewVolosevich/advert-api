import { IsOptional, IsString } from 'class-validator';

export class CreateRubricDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  alias: string;
}
