import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Case } from '../case/cases.entity';

@Entity('poscase')
export class Poscase {

  @PrimaryColumn()
  @OneToOne(() => Case)
  @JoinColumn()
  case_id: number;

  @PrimaryColumn()
  @ManyToOne(type => Case, (Case) => Case.pos_id)
  @JoinColumn({ name : 'pos_id' })
  pos_id:number;
}
