import {PiloteObj} from "./pilote.object";

export class EcurieObj {
  private _id !: number;
  private _name !: string;
  private _couleur_p !: string;
  private _couleur_s !: string;
  private _pilote_titulaire !: PiloteObj;
  private _pilote_remplacant !: PiloteObj;
  private _total_point !: number;
  private _championnat_gagner !: number;
}
