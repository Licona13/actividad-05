import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}


    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    //ver cat por id
    @Get(':id')
    getCat(@Param('id') id: string): Cat | undefined {
        return this.catsService.getCat(parseInt(id))
    }
}
