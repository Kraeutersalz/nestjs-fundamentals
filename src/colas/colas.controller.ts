import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ColasService } from './colas.service';

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
    return this.colasService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.colasService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.colasService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colasService.remove(id);
  }
}
