import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

@Entity('voiture')
export class Voiture {
  @PrimaryGeneratedColumn()
  id: number;

  //@ManyToOne()
  @JoinColumn({name:'ecurie_id'})
  @Column('int', {nullable: false})
  ecurie_id: number;

  //@ManyToOne()
  @JoinColumn({name:'pilote_id'})
  @Column('int', {nullable: true})
  pilote_id: number;


  @Column('text', {nullable: true})
  couleur_p: string;

  @Column('int', {nullable: true})
  pneu:number;

  @Column('int', {nullable: true})
  frein:number;

  @Column('int', {nullable: true})
  carrosserie:number;

  @Column('int', {nullable: true})
  grip:number;

  @Column('int', {nullable: true})
  essence:number;

  @Column('int', {nullable: true})
  moteur:number;

  @Column('int', {nullable: false})
  type_pneu:number;

  @Column('int', {nullable: false})
  vitesse_enclenchee:number;

}