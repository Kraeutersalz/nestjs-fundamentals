import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColasDto } from './dto/create-colas.dto';
import { UpdateColasDto } from './dto/update-colas.dto';
import { Cola } from './entities/colas.entity';

@Injectable()
export class ColasService {
  constructor(
    @InjectRepository(Cola) 
    private readonly colaRepository: Repository<Cola>,
  ){}

  findAll() {
    return this.colaRepository.find();
  }

  async findOne(id: string) {
    const cola = await this.colaRepository.findOne(id);
    if (!cola) {
      throw new NotFoundException(`Cola #${id} not found`);
    }
    return cola;
  }

  create(createColaDto: CreateColasDto) {
   const cola = this.colaRepository.create(createColaDto);
   return this.colaRepository.save(cola)
  }

  async update(id: string, updateColaDto: UpdateColasDto) {
    const cola = await this.colaRepository.preload({
      id: +id,
      ...updateColaDto,
    });
    if (!cola) {
      throw new NotFoundException(`Cola #${id} not found`);
    }
    return this.colaRepository.save(cola);
  }

  async remove(id: string) {
    const cola = await this.findOne(id);
    return this.colaRepository.remove(cola);
  }
}