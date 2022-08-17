import { v4 as uuidv4 } from 'uuid';

type Fuel = 'Diesel' | 'Petrol' | 'Hybrid' | 'Electric';
type Transmission = 'Manual' | 'Automatic';

export class Offer {
  public id: string;
  public make: string;
  public model: string;
  public year: number;
  public price: number;
  public fuelType: Fuel;
  public enginePower: number;
  public transmission: Transmission;
  public photo: string;
  public creatorEmail: string;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    fuelType: Fuel,
    enginePower: number,
    transmission: Transmission,
    photo: string,
    creatorEmail: string
  ) {
    this.id = uuidv4();
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.fuelType = fuelType;
    this.enginePower = enginePower;
    this.transmission = transmission;
    this.photo = photo;
    this.creatorEmail = creatorEmail;
  }
}
