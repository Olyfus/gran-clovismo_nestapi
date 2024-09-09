import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext', { nullable: true })
  name: string;

  @OneToMany(() => User, user => user.role)
  users: User[];

  @Column()
  description:string;

  @Column()
  dateCreated:Date;

}