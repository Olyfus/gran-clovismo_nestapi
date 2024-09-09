import { IVoiture } from '../interfaces/voiture.interface';
import { tireType } from '../enums/tireType.enum';
import { gearboxEnum } from '../enums/gearbox.enums';

export const jwtConstants = {
  secret: 'ylejyfeacg0gV3Wd8.=e)I"nkLxJEqDkx',
};

export const adminPriv = {
  token: "$2b$10$CcQeoM7HSvd.Mftc5oyJk.T0ezriC9UjwbD5RUq/pRm6cWh30tZnu"
}
export const testCar: IVoiture = {
  tire: 3,
  brake: 3,
  body: 3,
  grip: 3,
  fuel: 3,
  engine: 3,
  tireType: tireType.tendre,
  gear: gearboxEnum.neutre
};
