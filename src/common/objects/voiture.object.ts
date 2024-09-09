import {IVoiture} from '../interfaces/voiture.interface';
import {gearboxEnum} from "../enums/gearbox.enums";
import {tireType} from "../enums/tireType.enum";
import {GearboxService} from '../services/gearbox.services';
import {Dice} from "../singletons/dice.singleton";
import {PiloteObj} from "./pilote.object";
import {EcurieObj} from "./ecurie.object";
import { testCar } from '../env/constants';



export class VoitureObj {
  gearBoxFunction: GearboxService;
  ecurie!: EcurieObj | undefined;
  pilote!: PiloteObj | undefined;
  couleurP?: string | undefined;
  couleurS?: string | undefined;
  private tire!: number;
  private brake!: number;
  private body!: number;
  private grip!: number;
  private fuel!: number;
  private engine!: number;
  private tireType!: tireType;
  private gear!: gearboxEnum;

  constructor() {
    this.gearBoxFunction = new GearboxService;
  }

  setTire(amount: number): void {
    this.tire = amount;
  }

  getTire(): number {
    return this.tire;
  }

  setBrake(amount: number): void {
    this.brake = amount;
  }

  getBrake(): number {
    return this.brake
  }

  setBody(amount: number): void {
    this.body = amount;
  }

  getBody(): number {
    return this.body
  }

  setGrip(amount: number): void {
    this.grip = amount;
  }

  getGrip(): number {
    return this.grip;
  }

  setFuel(amount: number): void {
    this.fuel = amount;
  }

  getFuel(): number {
    return this.fuel;
  }

  setEngine(amount: number): void {
    this.engine = amount
  }

  getEngine(): number {
    return this.engine;
  }

  setTireType(type: tireType): void {
    this.tireType = type;
  }

  getTireType(): tireType {
    return this.tireType;
  }

  setGear(gear: gearboxEnum) {
    this.gear = gear;
  }

  getGear(): gearboxEnum {
    return this.gear
  }

  upShift(): void {
    this.gearBoxFunction.upShift(this);
  }

  downShift(quantity: number): void {
    this.gearBoxFunction.downShift(this, quantity);
  }

  selectVoiture(voiture: IVoiture) {
    this.tire = voiture.tire;
    this.brake = voiture.brake;
    this.body = voiture.body;
    this.grip = voiture.grip;
    this.fuel = voiture.fuel;
    this.engine = voiture.engine;
    this.tireType = voiture.tireType;
    this.gear = voiture.gear;
  }

  paddock() {
    this.selectVoiture(testCar);
    this.upShift();
  }

}
