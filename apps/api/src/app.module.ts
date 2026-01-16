import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
