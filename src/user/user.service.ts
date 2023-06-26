import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './model/user.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpMessages } from '../common/http-messages';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserModel>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const existedUser = await this.userModel
      .findOne({ email: dto.email })
      .exec();

    if (existedUser) {
      throw new HttpException(
        HttpMessages.ALREADY_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.userModel.create(dto);
  }

  async updateUser(dto: UpdateUserDto) {
    const existedUser = await this.userModel
      .findOne({ email: dto.email })
      .exec();

    if (!existedUser) {
      throw new HttpException(HttpMessages.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    const updatedUser = {
      ...{
        email: existedUser.email,
        phone: existedUser.phone,
        role: existedUser.role,
        location: existedUser.location,
        loginType: existedUser.loginType,
        marketDescription: existedUser.marketDescription,
        rating: existedUser.rating,
      },
      ...dto,
    };

    return this.userModel
      .findOneAndUpdate({ email: dto.email }, updatedUser, {
        new: true,
      })
      .exec();
  }

  async getUser(id: string) {
    const existedUser = await this.userModel.findById(id).exec();

    if (!existedUser) {
      throw new HttpException(HttpMessages.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    return existedUser;
  }

  async deleteUser(id: string) {
    const existedUser = await this.userModel.findById(id).exec();

    if (!existedUser) {
      throw new HttpException(HttpMessages.NOT_FOUND, HttpStatus.BAD_REQUEST);
    }

    return this.userModel.findByIdAndDelete(id).exec();
  }
}
