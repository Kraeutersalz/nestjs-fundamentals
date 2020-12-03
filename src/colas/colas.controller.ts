import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('colas')
export class ColasController {

    @Get()
    findAll() {
        return 'This action returns all colas';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} colas`;
    }
    
    @Post()
    create(@Body() body) {
      return body;
      // return `This action creates a coffee`;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return 'This action updates #${id} colas';
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This action removes #${id} coffee`;
    }
}
