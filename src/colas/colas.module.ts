import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
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
    imports: [TypeOrmModule.forFeature([Cola, Flavor, Event])],
    controllers: [ColasController],
    providers: [
        ColasService, 
        ColaBrandsFactory,
        { provide: COLA_BRANDS, useFactory:(brandsFactory: ColaBrandsFactory) => 
            brandsFactory.create(), 
        inject: [ColaBrandsFactory]},
    ],
    exports: [ColasService]
})
export class ColasModule {}
