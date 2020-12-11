import { Test, TestingModule } from '@nestjs/testing';
import { ColasService } from './colas.service';

describe('ColasService', () => {
  let service: ColasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColasService],
    }).compile();

    service = module.get<ColasService>(ColasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
