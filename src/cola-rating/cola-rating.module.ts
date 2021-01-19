import { Module } from '@nestjs/common';
import { ColasModule } from 'src/colas/colas.module';
import { ColaRatingService } from './cola-rating.service';

@Module({
  imports: [ColasModule],
  providers: [ColaRatingService]
})
export class ColaRatingModule {}
