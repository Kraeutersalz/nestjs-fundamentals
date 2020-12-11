import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColasController } from './colas/colas.controller';
import { ColasService } from './colas/colas.service';

@Module({
  imports: [],
  controllers: [AppController, ColasController],
  providers: [AppService, ColasService],
})
export class AppModule {}
