import {Greeting} from './greeting.entity';

export interface GreetingRepository {
  findAll(): Promise<Greeting[]>;
}