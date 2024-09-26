import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Voiture } from '../voiture/voitures.entity';
import { Podium } from '../podium/podiums.entity';
import { Map } from '../map/maps.entity';

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=> Map, map => map.course)
  @JoinColumn({name:'map_id'})
  @Column('int', {nullable: false})
  map_id:Map;

  @OneToOne(() => Podium)
  @JoinColumn({name:'podium_id'})
  @Column('int', {nullable: false})
  podium_id: number;

  @Column('int', {nullable: false})
  nb_tour: number;

  start_round: any;
  end_round: any;

  //@OneToOne(() => Voiture, voiture: Voiture => voiture.course_id, {nullable: true})
  //@JoinColumn({name:'voiture_id'})
  //voiture: Voiture;
}