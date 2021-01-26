import { Injectable, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { Connection } from 'typeorm';
import { COLA_BRANDS } from './colas.constants';
import { ColasController } from './colas.controller';
import { ColasService } from './colas.service';
import { Cola } from './entities/cola.entity';
import { Flavor } from './entities/flavor.entity';

@Injectable()
export class ColaBrandsFactory{
    create(){
        return ['fritz cola', 'pepsi'];
    }
}
@Module({
    imports: [TypeOrmModule.forFeature([Cola, Flavor, Event]), ConfigModule],
    controllers: [ColasController],
    providers: [
        ColasService, 
        ColaBrandsFactory,
        { 
            provide: COLA_BRANDS, useFactory: async (connection: Connection): Promise<string[]> => {
            const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
            return coffeeBrands;
          },
          inject: [Connection],
        },
    ],
    exports: [ColasService]
})
export class ColasModule {}
