import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateColasDto } from './dto/create-colas.dto';
import { UpdateColasDto } from './dto/update-colas.dto';
import { Cola } from './entities/colas.entity';
import { Flavor } from './entities/flavor.entity';

@Injectable()
export class ColasService {
  constructor(
    @InjectRepository(Cola) 
    private readonly colaRepository: Repository<Cola>,
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
  ){}

  findAll(paginationQuery: PaginationQueryDto) {
    const {limit, offset} = paginationQuery;
    return this.colaRepository.find({
      relations: ['flavors'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const cola = await this.colaRepository.findOne(id, {
      relations: ['flavors'],
    });
    if (!cola) {
      throw new NotFoundException(`Cola #${id} not found`);
    }
    return cola;
  }

  async create(createColaDto: CreateColasDto) {
   const flavors = await Promise.all(
     createColaDto.flavors.map(name=>this.preloadFlavorByName(name)),
   );

   const cola = this.colaRepository.create({
     ...createColaDto,
     flavors,
   });
   return this.colaRepository.save(cola);
  }

  async update(id: string, updateColaDto: UpdateColasDto) {
    const flavors =
    updateColaDto.flavors &&
      (await Promise.all(
        updateColaDto.flavors.map(name => this.preloadFlavorByName(name)),
      ));

    const cola = await this.colaRepository.preload({
      id: +id,
      ...updateColaDto,
      flavors,
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

  private async preloadFlavorByName(name: string): Promise<Flavor>{
    const existingFlavor = await this.flavorRepository.findOne({name});
    if(existingFlavor){
      return existingFlavor;
    }
    return this.flavorRepository.create({name});
  }
}