import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../role/role.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  email: string;

  @Column('longtext', { nullable: true })
  firstName: string;

  @Column('longtext', { nullable: true })
  lastName: string;

  @Column('longtext', { nullable: false })
  passwordEnc: string;

  @Column('longtext', { nullable: true })
  username: string;

  @ManyToOne(() => Role, role => role.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @Column({ type: 'datetime', precision: 6 })
  dateCreated: Date;

  @Column({ default: false })
  canCreateProject: boolean;

  @Column()
  validated: boolean;
}