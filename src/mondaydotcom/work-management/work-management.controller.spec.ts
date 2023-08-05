import { Test, TestingModule } from '@nestjs/testing';
import { WorkManagementController } from './work-management.controller';

describe('WorkManagementController', () => {
  let controller: WorkManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkManagementController],
    }).compile();

    controller = module.get<WorkManagementController>(WorkManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
