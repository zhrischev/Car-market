import { Address } from './address.model';
import { v4 as uuidv4 } from 'uuid';

export class User {
  public eMail: string;
  public firstName: string;
  public lastName: string;
  public address: Address;
  public phoneNumber: string;
  public photo: string;
  public id: string;

  constructor(
    eMail: string,
    firstName: string,
    lastName: string,
    address: Address,
    phoneNumber: string,
    photo: string
  ) {
    this.eMail = eMail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.photo = photo;
    this.id = uuidv4();
  }
}
