import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  job: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isJob: boolean;

  @Column()
  salary: number;
}
