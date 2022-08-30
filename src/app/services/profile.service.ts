import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
import { HttpService } from './http.service';

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

  private usersTest1: User[] = [];
  private loggedUser: User;

  constructor(private http: HttpService) {
    // this.http.fetchUsers().subscribe((resData) => {
    //   this.usersTest1 = resData;
    // });
  }

  logUser(email: string) {
    this.http.fetchUsers().subscribe((resData) => {
      this.loggedUser = resData.find((user) => user.eMail === email);
    });
  }

  createUser(user: User) {
    this.http
      .post(
        'https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        user
      )
      .subscribe((resDate) => {
        this.logUser(user.eMail);
      });
    console.log(this.loggedUser);
  }

  getLoggedUser() {
    return this.loggedUser;
  }

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
