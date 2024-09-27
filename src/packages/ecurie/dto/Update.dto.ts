import { Voiture } from '../../voiture/voitures.entity';

export class UpdateDto {
  id: number;
  nom: string;
  couleur_p: string;
  couleur_s: string;
  pilote_p_id: number;
  pilote_r_id: number;
  total_point: number;
  nb_victoire: number;
}