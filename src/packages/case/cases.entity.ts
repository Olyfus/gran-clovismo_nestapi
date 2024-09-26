import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import {Map} from '../map/maps.entity';

@Entity('case')
export class Case {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Map, map => map.cases)
  @JoinColumn({name:'map_id'})
  @Column('int', {nullable: false})
  map_id:Map;

  //les positions d'une case
  pos_id: number[];

  @Column('longtext', {nullable: false})
  coords!: string;

  @Column('text', {nullable: true})
  point_1!: string;

  @Column('text', {nullable: true})
  point_2!: string;

  @Column('text', {nullable: true})
  point_3!: string;

  @Column('text', {nullable: true})
  point_4!: string;

}