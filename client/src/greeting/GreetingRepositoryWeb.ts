import {GreetingRepository} from "../../../src/greeting/GreetingRepository";
import {GreetingInterface} from "./GreetingInterface";

export class GreetingRepositoryWeb implements GreetingRepository {
  async findAll(): Promise<GreetingInterface[]> {
    const response = await fetch('http://localhost:8080');
    return await response.json();
  }
}