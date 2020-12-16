import { Module } from '@nestjs/common';
import { ColasController } from './colas.controller';
import { ColasService } from './colas.service';

@Module({controllers: [ColasController], providers: [ColasService]})
export class ColasModule {}
