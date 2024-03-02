import { Test, TestingModule } from '@nestjs/testing';
import { PeliculasController } from './peliculas.controller';

describe('PeliculasController', () => {
  let controller: PeliculasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeliculasController],
    }).compile();

    controller = module.get<PeliculasController>(PeliculasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
