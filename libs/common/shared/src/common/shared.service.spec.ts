import { Test, TestingModule } from '@nestjs/testing';
import { Common/sharedService } from './common/shared.service';

describe('Common/sharedService', () => {
  let service: Common/sharedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Common/sharedService],
    }).compile();

    service = module.get<Common/sharedService>(Common/sharedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
