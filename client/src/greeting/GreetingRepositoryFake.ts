import {GreetingRepository} from "../../../src/greeting/GreetingRepository";
import {GreetingInterface} from "./GreetingInterface";

export class GreetingRepositoryFake implements GreetingRepository {
  findAll(): Promise<GreetingInterface[]> {
    const greeting: GreetingInterface = {id: 1, phrase: 'Hello World!'};
    return Promise.resolve([greeting]);
  }
}