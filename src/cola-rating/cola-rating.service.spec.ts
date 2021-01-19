import { Test, TestingModule } from '@nestjs/testing';
import { ColaRatingService } from './cola-rating.service';

describe('ColaRatingService', () => {
  let service: ColaRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColaRatingService],
    }).compile();

    service = module.get<ColaRatingService>(ColaRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
