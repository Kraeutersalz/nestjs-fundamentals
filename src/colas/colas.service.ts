import { Injectable } from '@nestjs/common';
import { Colas } from './entities/colas.entity';

@Injectable()
export class ColasService {
  private colas: Colas[] = [
    {
      id: 1,
      name: 'Fritz Cola',
      brand: 'Fritz',
      flavors: ['Cola', 'Natural'],
    },
  ];

  findAll() {
    return this.colas;
  }

  findOne(id: string) {
    return this.colas.find(item => item.id === +id);
  }

  create(createColaDto: any) {
    this.colas.push(createColaDto);
  }

  update(id: string, updateColaDto: any) {
    const existingCola = this.findOne(id);
    if (existingCola) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.colas.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.colas.splice(coffeeIndex, 1);
    }
  }
}