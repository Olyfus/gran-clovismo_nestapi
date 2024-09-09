import {WeatherEnum} from "../enums/weather.enum";
import {PiloteObj} from "../objects/pilote.object";

interface TourRestant {
  pilote : PiloteObj,
  tour : number
}

export class CourseInstances {
  public nombreTour !: number;
  public tourRestant !: TourRestant[];
  public conditionMeteo !: WeatherEnum;
}
