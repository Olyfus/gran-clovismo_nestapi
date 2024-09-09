import { gearboxEnum } from "../enums/gearbox.enums";
import { tireType } from "../enums/tireType.enum";
import {PiloteObj} from "../objects/pilote.object";

export interface IVoiture {
    tire: number;
    brake: number;
    body: number;
    grip: number;
    fuel: number;
    engine: number;

    tireType: tireType;
    gear: gearboxEnum;

    ecurie?: PiloteObj;
    pilote?: PiloteObj;
    couleurP?: string;
    couleurS?: string;
}
