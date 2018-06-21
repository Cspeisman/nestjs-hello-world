import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Greeting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  phrase: string;
}