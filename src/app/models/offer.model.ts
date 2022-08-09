export class Offer {
  public make: string;
  public model: string;
  public year: number;
  public fuelType: 'Diesel' | 'Petrol' | 'Hybrid' | 'Electric';
  public enginePower: number;
  public transmission: 'Manual' | 'Automatic';
  public photo: string;

  constructor(
    make: string,
    model: string,
    year: number,
    fuelType: 'Diesel' | 'Petrol' | 'Hybrid' | 'Electric',
    enginePower: number,
    transmission: 'Manual' | 'Automatic',
    photo: string
  ) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.fuelType = fuelType),
      (this.enginePower = enginePower),
      (this.transmission = transmission),
      (this.photo = photo);
  }
}
