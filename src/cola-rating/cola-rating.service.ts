import { Injectable } from '@nestjs/common';
import { ColasService } from 'src/colas/colas.service';

@Injectable()
export class ColaRatingService {
    constructor (private readonly colaService: ColasService) {}
}
