export class Address {
  public street: string;
  public city: string;
  public postCode: string;
  public streetNumber: number;

  constructor(
    street: string,
    city: string,
    postCode: string,
    streetNumber: number
  ) {
    this.street = street;
    this.city = city;
    this.postCode = postCode;
    this.streetNumber = streetNumber;
  }
}
