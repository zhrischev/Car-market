export class Offer {
  public make: string;
  public model: string;
  public year: number;
  public price: number;
  public fuelType: 'Diesel' | 'Petrol' | 'Hybrid' | 'Electric';
  public enginePower: number;
  public transmission: 'Manual' | 'Automatic';
  public photo: string;
  public creatorEmail: string;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    fuelType: 'Diesel' | 'Petrol' | 'Hybrid' | 'Electric',
    enginePower: number,
    transmission: 'Manual' | 'Automatic',
    photo: string,
    creatorEmail: string
  ) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.price = price),
      (this.fuelType = fuelType),
      (this.enginePower = enginePower),
      (this.transmission = transmission),
      (this.photo = photo),
      (this.creatorEmail = creatorEmail);
  }
}
