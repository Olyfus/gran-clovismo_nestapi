import { Voiture } from '../../voiture/voitures.entity';
import { Poscase } from '../../poscase/poscase.entity';
import {Map} from '../../map/maps.entity';

export class UpdateDto {
  id:number;
  map_id: Map;
  pos_id: number[];
  coords: string;
  pos_1: string;
  pos_2: string;
  pos_3: string;
  pos_4: string;
}