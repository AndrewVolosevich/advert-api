import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  return `mongodb+srv://${configService.get('MONGO_LOGIN')}:${configService.get(
    'MONGO_PASSWORD',
  )}@advert.enuessw.mongodb.net/?retryWrites=true&w=majority`;
};
const getMongoOptions = () => {
  return {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
};
