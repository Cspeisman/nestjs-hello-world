import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Greeting} from "./greeting.entity";
import {GreetingService} from "./greeting.service";
import {GreetingController} from "./greeting.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Greeting])],
  providers: [GreetingService],
  controllers: [GreetingController],
})
export class GreetingModule {}