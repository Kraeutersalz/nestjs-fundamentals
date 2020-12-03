import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColasController } from './colas/colas.controller';

@Module({
  imports: [],
  controllers: [AppController, ColasController],
  providers: [AppService],
})
export class AppModule {}
