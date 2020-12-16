import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ColasService } from './colas.service';
import { CreateColasDto } from './dto/create-colas.dto';
import { UpdateColasDto } from './dto/update-colas.dto';

@Controller('colas')
export class ColasController {
    constructor(private readonly colasService: ColasService){}
    
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.colasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colasService.findOne(' ' + id);
  }

  @Post()
  create(@Body() createColaDto: CreateColasDto) {
    console.log(createColaDto instanceof CreateColasDto)
    return this.colasService.create(createColaDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColasDto: UpdateColasDto) {
    return this.colasService.update(id, updateColasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colasService.remove(id);
  }
}
