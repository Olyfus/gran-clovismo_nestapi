import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

@Entity('pilote')
export class Pilote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {nullable: false})
  nom: string;

  @Column('int', {nullable: true})
  point_total: number;

  @Column('int', {nullable: true})
  course_gagnee: number;
}