import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../role/role.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext', { nullable: true })
  aboutMe: string;

  @ManyToOne(() => Role, role => role.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @Column({ type: 'datetime', precision: 6 })
  dateCreated: Date;

  @Column({ default: false })
  canCreateProject: boolean;
}