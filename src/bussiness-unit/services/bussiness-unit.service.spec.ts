import { Test, TestingModule } from '@nestjs/testing';
import { BussinessUnitService } from './bussiness-unit.service';

describe('BussinessUnitService', () => {
  let service: BussinessUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BussinessUnitService],
    }).compile();

    service = module.get<BussinessUnitService>(BussinessUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
