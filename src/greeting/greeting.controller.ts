import {Controller, Get, Render} from '@nestjs/common';
import {GreetingService} from './greeting.service';

@Controller('/api/greeting')
export class GreetingController {
  constructor(private greetingService: GreetingService) {}

  @Get()
  async index() {
    return await this.greetingService.findAll();
  }
}