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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdValidationPipe } from '../pipes/id-validation.pipe';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Patch('update')
  @UsePipes(new ValidationPipe())
  async updateUser(@Body() dto: UpdateUserDto) {
    return this.userService.updateUser(dto);
  }

  @Get(':id')
  async getUser(@Param('id', IdValidationPipe) id: string) {
    return this.userService.getUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id', IdValidationPipe) id: string) {
    return this.userService.deleteUser(id);
  }
}
