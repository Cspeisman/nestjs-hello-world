import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {GreetingInterface} from "../../client/src/greeting/GreetingInterface";

@Entity()
export class Greeting implements GreetingInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  phrase: string;
}