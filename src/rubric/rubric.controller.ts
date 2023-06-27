import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRubricDto } from './dto/create-rubric.dto';
import { RubricService } from './rubric.service';
import { IdValidationPipe } from '../global/pipes/id-validation.pipe';

@Controller('rubric')
export class RubricController {
  constructor(
    @Inject(RubricService) private readonly rubricService: RubricService,
  ) {}
  @Post('create')
  @UsePipes(new ValidationPipe())
  async createRubric(@Body() dto: CreateRubricDto) {
    return this.rubricService.createRubric(dto);
  }
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateRubric(
    @Body() dto: CreateRubricDto,
    @Param('id', IdValidationPipe) id: string,
  ) {
    return this.rubricService.updateRubric(dto, id);
  }
  @Delete(':id')
  async deleteRubric(@Param('id', IdValidationPipe) id: string) {
    return this.rubricService.deleteRubric(id);
  }

  @Get('with-categories')
  async getAllRubricsWithCategories() {
    return this.rubricService.getAllRubricsWithCategories();
  }
}
