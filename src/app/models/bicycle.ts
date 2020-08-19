import { BicycleType } from './bicycle-type';

export class Bicycle {
  id: string;
  name: string;
  price: number;
  rentalStatus: boolean;
  type: BicycleType;
  typeId: string;
}