import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';


@Entity('case')
export class Case {
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

}