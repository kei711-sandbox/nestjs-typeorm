import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: number;

  @Column()
  message: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

}
