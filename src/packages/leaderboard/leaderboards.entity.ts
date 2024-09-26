import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

@Entity('leaderboard')
export class Leaderboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  pos_id: number[];

  @Column('text', {nullable: false})
  nom_leaderboard: string;

  //
}