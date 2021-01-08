import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColasController } from './colas.controller';
import { ColasService } from './colas.service';
import { Cola } from './entities/colas.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cola])],
    controllers: [ColasController],
    providers: [ColasService]})
export class ColasModule {}
