import { Test, TestingModule } from '@nestjs/testing';
import { ColasController } from './colas.controller';

describe('ColasController', () => {
  let controller: ColasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColasController],
    }).compile();

    controller = module.get<ColasController>(ColasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
