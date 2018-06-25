import {Controller, Get, Render} from "@nestjs/common";
import {GreetingService} from "./greeting.service";

@Controller('/')
export class GreetingController {
  constructor(private greetingService: GreetingService) {}

  @Get()
  async index() {
    return await this.greetingService.findAll();
  }

  @Get('/test')
  @Render('index')
  test() {
  }
}