import {PiloteObj} from "./pilote.object";
import {LeaderboardInstances} from "../instances/leaderboard.instances";

export class LeaderboardObj {

  private _id!: number;
  private _name!: string;
  private _entrees!: LeaderboardInstances[];

  public getId(): number {
    return this._id;
  }

  public setId(value: number) {
    this._id = value;
  }

  public getName(): string {
    return this._name;
  }

  public setName(value: string) {
    this._name = value;
  }

  public getEntrees(): LeaderboardInstances[] {
    return this._entrees;
  }

  public setEntrees(value: LeaderboardInstances[]) {
    this._entrees = value;
  }

  public reorderLeaderbord() {
    // celle qu'on va manipuler à notre guise
    var tempEntrees = this.getEntrees();

    // Nouvelle liste de pilotes qu'on va passer dans le setPilotes pour pouvoir avoir le nouveau tableau au propre
    var newEntrees: LeaderboardInstances[] = [];

    for (var x = 0; x < this.getEntrees().length; x++) {
      // pour chaque passage, on instancie une nouvelle entrées de leaderboard
      var newEntree: LeaderboardInstances = new LeaderboardInstances();
      var pos : number = 0;

      // on lui met le nombre de point pour pouvoir lui instancier le plus haut
      newEntree.point = 0;

      for (var y = 0; y < tempEntrees.length; y++) {
        // on détermine si il y a déjà une entrée à la nouvelle liste
        if (newEntrees.length != 0) {
          // on cherche le point le plus élevé qui est inférieur a la dernière entrée
          if (newEntree.point < tempEntrees[y].point && tempEntrees[y].point < newEntrees[-1].point) {
            newEntree.point = tempEntrees[y].point;
            pos = y;
          }
        } else {
          // sinon on cherche le point le plus élevé et on le référence
          if (newEntree.point < tempEntrees[y].point) {
            newEntree.point = tempEntrees[y].point;
            pos = y;

          }
        }
      }
      // après avoir récup la pos, on push l'entrée la plus haute, le temps que la boucle ce fasse
      newEntrees.push(tempEntrees[pos]);

    }
    // on change les entrées en ce qui a été déterminé
    this.setEntrees(newEntrees);
  }
}
