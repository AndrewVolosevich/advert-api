import { Module } from '@nestjs/common';
import { RubricController } from './rubric.controller';
import { RubricService } from './rubric.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RubricModel, RubricSchema } from './model/rubric.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RubricModel.name, schema: RubricSchema },
    ]),
  ],
  controllers: [RubricController],
  providers: [RubricService],
})
export class RubricModule {}
