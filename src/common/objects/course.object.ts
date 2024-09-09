import {MapObj} from "./map.object";
import {RoundInstances} from "../instances/round.instances";
import {PiloteObj} from "./pilote.object";
import {VoitureObj} from "./voiture.object";
import {PodiumObj} from "./podium.object";
import {CourseInstances} from "../instances/course.instances";

export class CourseObj {
  private _map !: MapObj;
  private _startRound !: RoundInstances[];
  private _endRound !: RoundInstances[];
  private _voitures !: VoitureObj[];
  private _podium !: PodiumObj;
  private _instance !: CourseInstances;
}
