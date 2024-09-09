import { Voiture } from '../voitures.entity';

export class UpdateDto {
  id:number;
  pos_id: number[];
  coords: string;
  pos_1: string;
  pos_2: string;
  pos_3: string;
  pos_4: string;
  voiture?: Voiture;
}