import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';

@Injectable()
export class ProfileService {
  private users: User[] = [
    new User(
      'zaprin@abv.bg',
      'Zaprin',
      'Hrischev',
      new Address('Vasil Levski', 'Pazardzhik', '4400', 64),
      '0898682260',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWIncXI5vSSiypVSkGTQ6Q_F6mUR-iuEYpQ&usqp=CAU'
    ),
    new User(
      'test@abv.bg',
      'Test',
      'Testov',
      new Address('Street', 'City', 'Post code', 66),
      'Phone number',
      'image'
    ),
  ];

  getUserByEmail(email: string) {
    return this.users.find((user) => user.eMail === email);
  }

  getMainProfile() {
    return this.users.find((user) => user.eMail === 'zaprin@abv.bg');
  }

  getAllUsers() {
    return this.users.slice();
  }
}
