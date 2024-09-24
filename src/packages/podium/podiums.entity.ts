import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Voiture } from '../voiture/voitures.entity';

@Entity('podium')
export class Podium {
  @PrimaryGeneratedColumn()
  id: number;

  //@OneToOne()
  @JoinColumn({name: 'course_id'})
  @Column('int', {nullable: false})
  course_id: number;

  //@ManyToOne()
  @JoinColumn({name:'premiere'})
  @Column('int', {nullable: false})
  premiere!: number;

  //@ManyToOne()
  @JoinColumn({name:'deuxieme'})
  @Column('int', {nullable: false})
  deuxieme!: number;

  //@ManyToOne()
  @JoinColumn({name:'troisieme'})
  @Column('int', {nullable: false})
  troisieme!: number;

  //@ManyToOne()
  @JoinColumn({name:'quatrieme'})
  @Column('int', {nullable: true})
  quatrieme!: number;

  //@ManyToOne()
  @JoinColumn({name:'cinquieme'})
  @Column('int', {nullable: true})
  cinquieme!: number;

  //@ManyToOne()
  @JoinColumn({name:'sixieme'})
  @Column('int', {nullable: true})
  sixieme!: number;

  //@ManyToOne()
  @JoinColumn({name:'septieme'})
  @Column('int', {nullable: true})
  septieme!: number;

  //@ManyToOne()
  @JoinColumn({name:'huitieme'})
  @Column('int', {nullable: true})
  huitieme!: number;

  //@OneToOne(() => Voiture, voiture: Voiture => voiture.case_id, {nullable: true})
  //@JoinColumn({name:'voiture_id'})
  //voiture: Voiture;
}