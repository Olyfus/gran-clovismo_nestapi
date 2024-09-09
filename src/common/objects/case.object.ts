import {ICase} from "../interfaces/case.interface";
import {VoitureObj} from "./voiture.object";

export const testCase: ICase = {
  pos_id: [0],
  coords: "0,0,0,0,0,0,0,0"
}

export class CasesObj implements ICase {
  private _id!: number;
  pos_id!: number[];
  coords!: string;
  point_1!: string;
  point_2!: string;
  point_3!: string;
  point_4!: string;
  voiture_dessus!: VoitureObj | null;


  constructor(c: ICase) {
    this.pos_id = c.pos_id;
    if (c.coords) {
      this.coords = c.coords;
      this.get_points_from_cords();
    }
    if (c.point_1) {
      this.point_1 = c.point_1;
    }
    if (c.point_2) {
      this.point_2 = c.point_2;
    }
    if (c.point_3) {
      this.point_3 = c.point_3;
    }
    if (c.point_4) {
      this.point_4 = c.point_4;
    }
    if (this.point_1 && this.point_2 && this.point_3 && this.point_4 && this.coords == undefined) {
      console.log("D")
      this.get_cords()
    }
  }

  car_on_this(v: VoitureObj): void {
    this.voiture_dessus = v;
  }

  car_left(): void {
    this.voiture_dessus = null;
  }

  get_car_on_case(): VoitureObj|null {
    return this.voiture_dessus;
  }

  getCasesId(): number[] {
    return this.pos_id;
  }

  get_cords(): void {
    let t_coords: string;
    t_coords = this.point_1 + "," + this.point_2 + "," + this.point_3 + "," + this.point_4;
    this.coords = t_coords;
  }

  get_points_from_cords(): void {
    // sens des aiguilles d'une montres
    // clockwise
    let split_coords = this.coords.split(',');
    if (split_coords.length == 8) {
      this.point_1 = split_coords[0] + ',' + split_coords[1];
      this.point_2 = split_coords[2] + ',' + split_coords[3];
      this.point_3 = split_coords[4] + ',' + split_coords[5];
      this.point_4 = split_coords[6] + ',' + split_coords[7];
    } else {
      this.point_1 = split_coords[0] + ',' + split_coords[1];
      this.point_4 = split_coords[split_coords.length - 2] + ',' + split_coords[split_coords.length - 1];
    }
  }

  determine_bottom_from_previous_top(c: CasesObj) {
    if (this.point_1 != c.point_2 || this.point_1 == undefined) {
      this.point_1 = c.point_2;
    }

    if (this.point_4 != c.point_3 || this.point_4 == undefined) {
      this.point_3 = c.point_3;
    }
  }
}
