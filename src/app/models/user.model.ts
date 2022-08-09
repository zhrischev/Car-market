import { Adress } from './adress.model';

export class User {
  public eMail: string;
  public firstName: string;
  public lastName: string;
  public address: Adress;
  public phoneNumber: string;
  public photo: string;

  constructor(
    eMail: string,
    firstName: string,
    lastName: string,
    address: Adress,
    phoneNumber: string,
    photo: string
  ) {
    this.eMail = eMail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.photo = photo;
  }
}
