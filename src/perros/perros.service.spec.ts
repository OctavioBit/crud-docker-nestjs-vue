import { Test, TestingModule } from '@nestjs/testing';
import { PerrosService } from './perros.service';

describe('PerrosService', () => {
  let service: PerrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerrosService],
    }).compile();

    service = module.get<PerrosService>(PerrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
