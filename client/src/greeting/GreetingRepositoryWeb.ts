import {GreetingInterface} from './GreetingInterface';
import { GreetingRepository } from '../../../src/greeting/GreetingRepository';

export class GreetingRepositoryWeb implements GreetingRepository {
  async findAll(): Promise<GreetingInterface[]> {
    const response = await fetch('/api/greeting');
    return await response.json();
  }
}