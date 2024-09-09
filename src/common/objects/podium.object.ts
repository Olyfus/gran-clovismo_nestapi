import {PiloteObj} from "./pilote.object";
import {PointsInstances} from "../instances/points.instances"
import {CourseObj} from "./course.object";

export class PodiumObj {
  private _id !: number;
  private _course !: CourseObj;
  private _premierePlace !: PiloteObj
  private _deuxiemePlace !: PiloteObj
  private _troisiemePlace !: PiloteObj
  private _quatriemePlace !: PiloteObj | null
  private _cinquiemePlace !: PiloteObj | null
  private _sixiemePlace !: PiloteObj | null
  private _septiemePlace !: PiloteObj | null
  private _huitiemePlace !: PiloteObj | null
  private _neuviemePlace !: PiloteObj | null
  private _dixiemePlace !: PiloteObj | null
  private _pointsParPlace !: PointsInstances;
}
