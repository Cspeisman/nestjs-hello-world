import { Test, TestingModule } from '@nestjs/testing';
import {GreetingController} from "./greeting.controller";
import {GreetingService} from "./greeting.service";
import {Greeting} from "./greeting.entity";
import {getRepositoryToken} from '@nestjs/typeorm';

const mockRepository = {
  find: () => [{phrase: 'Hello World!'}]
};

describe('GreetingController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [GreetingController],
      providers: [
        GreetingService,
        {
          provide: getRepositoryToken(Greeting),
          useValue: mockRepository,
        },
      ],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      const appController = app.get<GreetingController>(GreetingController);
      const response = await appController.index();
      expect(response[0].phrase).toBe('Hello World!');
    });
  });
});
