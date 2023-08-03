import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from '../configs/mongo.config';
import { UserModule } from './user/user.module';
import { RubricModule } from './rubric/rubric.module';
import { CategoryModule } from './category/category.module';
import { BaseAdvertModule } from './base-advert/base-advert.module';
import { SubcategoryModule } from './subcategory/subcategory.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    UserModule,
    RubricModule,
    CategoryModule,
    BaseAdvertModule,
    SubcategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
