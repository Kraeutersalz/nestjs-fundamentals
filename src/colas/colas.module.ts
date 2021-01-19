import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { ColasController } from './colas.controller';
import { ColasService } from './colas.service';
import { Cola } from './entities/cola.entity';
import { Flavor } from './entities/flavor.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Cola, Flavor, Event])],
    controllers: [ColasController],
    providers: [ColasService],
    exports: [ColasService]
})
export class ColasModule {}
