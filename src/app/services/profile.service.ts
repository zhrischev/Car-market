import { AriaDescriber } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable()
export class ProfileService {
  private loggedUser: User;

  constructor(private http: HttpService) {
    this.loggedUser = new User(
      '',
      '',
      '',
      new Address('', '', '', null),
      '',
      ''
    );
  }

  logUser(email: string) {
    this.http
      .get(
        'https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .subscribe((resData) => {
        this.loggedUser = resData.find((user) => user.eMail === email);
        console.log(resData);
      });
  }

  logoutUser() {
    this.loggedUser = new User(
      '',
      '',
      '',
      new Address('', '', '', null),
      '',
      ''
    );
  }

  createUser(user: User) {
    const url = `https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/users/${user.id}.json`;
    this.http.put(url, user).subscribe((resData) => {
      this.logUser(user.eMail);
      console.log(resData);
    });
    console.log(this.loggedUser);
  }

  editLoggedUser(user: User) {
    const url = `https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/users/${user.id}.json`;
    this.http.patch(url, user).subscribe((resData) => {
      console.log(resData);
    });
  }

  getLoggedUser() {
    return this.loggedUser;
  }
}
