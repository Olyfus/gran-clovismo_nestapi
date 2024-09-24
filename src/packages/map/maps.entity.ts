import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

@Entity('map')
export class Map {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
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

  //@OneToOne(() => Voiture, voiture: Voiture => voiture.case_id, {nullable: true})
  //@JoinColumn({name:'voiture_id'})
  //voiture: Voiture;
}