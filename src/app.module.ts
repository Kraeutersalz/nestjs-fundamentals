import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColasModule } from './colas/colas.module';

@Module({
  imports: [ColasModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
