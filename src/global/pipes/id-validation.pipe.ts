import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  PipeTransform,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { HttpMessages } from '../../common/http-messages';

export class IdValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (metadata.type !== 'param') {
      return value;
    }
    if (!Types.ObjectId.isValid(value)) {
      throw new HttpException(
        HttpMessages.WRONG_FORMAT,
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
