import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Greeting} from './greeting.entity';
import {Repository} from 'typeorm';

@Injectable()
export class GreetingService {
  constructor(@InjectRepository(Greeting) private repository: Repository<Greeting>) {}

  async findAll(): Promise<Greeting[]> {
    return this.repository.find();
  }
}