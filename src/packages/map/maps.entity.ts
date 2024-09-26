import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Course } from '../course/course.entity';
import { Case } from '../case/cases.entity';

@Entity('map')
export class Map {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {nullable: false})
  nom_map: string;

  @Column('text', {nullable: true})
  nom_fichier: string;

  @OneToMany(() => Course, course => course.map_id)
  course: Course[];

  @OneToMany(() => Case, cases => cases.map_id)
  cases: Case[];
}