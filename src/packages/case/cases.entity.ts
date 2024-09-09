import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Voiture } from '../voiture/voitures.entity';

@Entity('case')
export class Case {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('number')
  pos_id: number[];

  @Column('longtext', {nullable: false})
  coords!: string;

  @Column('string', {nullable: true})
  point_1!: string;

  @Column('string', {nullable: true})
  point_2!: string;

  @Column('string', {nullable: true})
  point_3!: string;

  @Column('string', {nullable: true})
  point_4!: string;

  //@OneToOne(() => Voiture, voiture: Voiture => voiture.case_id, {nullable: true})
  //@JoinColumn({name:'voiture_id'})
  //voiture: Voiture;
}