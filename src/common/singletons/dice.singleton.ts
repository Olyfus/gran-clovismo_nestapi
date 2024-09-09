import {ActionService} from "../services/action.services";
import {gearboxEnum} from "../enums/gearbox.enums";
import {VoitureObj} from "../objects/voiture.object";

export class Dice {
  private static instance: Dice;
  black_motor_five: number;
  black_motor_six: number;
  black_motor_loss: number;
  black_contact: number;
  black_bad_start: number;
  black_good_start: number;
  private un: number[];
  private deux: number[];
  private trois: number[];
  private quatre: number[];
  private cinq: number[];
  private six: number[];
  private black: number[];

  private constructor() {
    this.un = [1, 1, 2, 2];
    this.deux = [2, 3, 3, 4, 4, 4];
    this.trois = [4, 5, 6, 6, 7, 7, 8, 8];
    this.quatre = [7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
    this.cinq = [11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20];
    this.six = [21, 21, 21, 22, 22, 22, 23, 23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27, 28, 28, 28, 29, 29, 29, 30, 30, 30];
    this.black = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    this.black_motor_five = 20;
    this.black_motor_six = 30;
    this.black_motor_loss = 4;
    this.black_contact = 1;
    this.black_bad_start = 1;
    this.black_good_start = 20;
  }

  static getInstance(): Dice {
    if (!Dice.instance) {
      Dice.instance = new Dice();
    }
    return Dice.instance;
  }

  getUn(): number [] {
    return this.un;
  }

  getDeux(): number[] {
    return this.deux;
  }

  getTrois(): number[] {
    return this.trois;
  }

  getQuatre(): number[] {
    return this.quatre;
  }

  getCinq(): number[] {
    return this.cinq;
  }

  getSix(): number [] {
    return this.six;
  }

  getBlack(): number[] {
    return this.black;
  }

  rollBlackDice(voitures: VoitureObj[], action: string) {
    switch (action) {
      case ('moteur') :
        this.testMoteur(voitures);
        break;
      default :
        console.error("LE DÉ NOIR A ÉTÉ UTILISER AVEC L'ACTION : " + action + "\nET LA LISTE : \n" + voitures.toString());
    }
  }

  rollDice(gear: gearboxEnum): number {
    let roll: number;
    switch (gear) {
      case gearboxEnum.un:
        roll = this.diceFace(this.getUn());
        break;

      case gearboxEnum.deux:
        roll = this.diceFace(this.getDeux());
        break;

      case gearboxEnum.trois:
        roll = this.diceFace(this.getTrois());
        break;

      case gearboxEnum.quatre:
        roll = this.diceFace(this.getQuatre());
        break;

      case gearboxEnum.cinq:
        roll = this.diceFace(this.getCinq());
        break;

      case gearboxEnum.six:
        roll = this.diceFace(this.getSix());
        break;

      default:
        throw new Error('Clutch engaged');
    }
    console.log("Roll " + roll);
    return roll;
  }

  private diceFace(list: number[]): number {
    let random: number;
    let roll: number;
    let min = 0;
    let max = list.length;
    random = Math.floor(Math.random() * (max - min) + min)
    roll = this.randomizer(this.getBlack(), random);
    return roll;
  }

  private randomizer(list: number[], position: number): number {
    // Cela permet de mélanger les nombres dès qu'un lancer est fait, ainsi la liste n'est pas statique mais réellement
    // aléatoire
    let poppedNb: number;
    let newList: number[] = [];
    poppedNb = list[position];

    // Maintenant que l'on sais quel chiffre l'on a, on "pop" en recréeant la liste de 0 mais en écartant la position de notre chiffre
    for (let i: number = 0; i < list.length; i++) {
      if (position != i) {
        newList.push(list[position]);
      }
    }

    // On dit que la nouvelle liste est la liste qui a été passé
    list = newList;

    //et on rajoute le chiffre qu'on a "pop"
    list.push(poppedNb);
    return poppedNb;
  }

  private testMoteur(voitures: VoitureObj[]) {
    let results: number[] = [];
    let roll: number;

    // Pour chaque voiture, le dés noir est lancé
    for (let i = 0; i < voitures.length; i++) {
      roll = this.diceFace(this.getBlack());
      results.push(roll);
    }

    // Les résultats du dé noir sont décompté
    for (let i = 0; i < results.length; i++) {

      if (results[i] == this.black_motor_loss) {
        voitures[i].setEngine(voitures[i].getEngine() - 1)
      }
    }
  }
}
