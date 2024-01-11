import { Test, TestingModule } from '@nestjs/testing';
import { PerrosController } from './perros.controller';

describe('PerrosController', () => {
  let controller: PerrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerrosController],
    }).compile();

    controller = module.get<PerrosController>(PerrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
