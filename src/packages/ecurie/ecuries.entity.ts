import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

@Entity('ecurie')
export class Ecurie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {nullable: false})
  nom: string;

  @Column('text', {nullable: true})
  couleur_p: string;

  @Column('text', {nullable: true})
  couleur_s: string;

  //@OneToOne()
  @JoinColumn({name: 'pilote_p_id'})
  @Column('int', {nullable: true})
  pilote_p_id: number;

  //@OneToOne()
  @JoinColumn({name: 'pilote_r_id'})
  @Column('int', {nullable: true})
  pilote_r_id: number;

  @Column('int', {nullable: true})
  total_point: number;

  @Column('int', {nullable: true})
  cahmpionnat_gagner: number;
}