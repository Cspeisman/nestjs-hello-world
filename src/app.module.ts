import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";
import {GreetingModule} from "./greeting/greeting.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:  'localhost',
      port: 5432,
      username: 'cspeisman',
      password: '',
      database: 'test',
      entities: [__dirname + '*/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    GreetingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
