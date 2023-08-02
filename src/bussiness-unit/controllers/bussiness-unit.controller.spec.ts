import { Test, TestingModule } from '@nestjs/testing';
import { BussinessUnitController } from '../controllers/bussiness-unit.controller';
import { BussinessUnitService } from '../services/bussiness-unit.service';

describe('BussinessUnitController', () => {
  let controller: BussinessUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BussinessUnitController],
      providers: [BussinessUnitService],
    }).compile();

    controller = module.get<BussinessUnitController>(BussinessUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
