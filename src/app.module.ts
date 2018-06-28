import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GreetingModule} from './greeting/greeting.module';
import {Connection} from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:  `${process.env.DB_HOST}`,
      port: 5432,
      username: `${process.env.DB_USERNAME}`,
      password: `${process.env.DB_PW}`,
      database: `${process.env.DB_NAME}`,
      entities: [__dirname + '*/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GreetingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
