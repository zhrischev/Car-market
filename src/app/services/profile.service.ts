import { Injectable } from '@angular/core';
import { Adress } from '../models/adress.model';
import { User } from '../models/user.model';

@Injectable()
export class ProfileService {
  private users: User[] = [
    new User(
      'zaprin@abv.bg',
      'Zaprin',
      'Hrischev',
      new Adress('Vasil Levski', 'Pazardzhik', '4400', 64),
      '0898682260',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWIncXI5vSSiypVSkGTQ6Q_F6mUR-iuEYpQ&usqp=CAU'
    ),
    new User(
      'test@abv.bg',
      'Test',
      'Testov',
      new Adress('Street', 'City', 'Post code', 66),
      'Phone number',
      'image'
    ),
  ];

  getUserByEmail(email: string) {
    return this.users.find((user) => user.eMail === email);
  }
}
