import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Offer } from '../models/offer.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  post(url: string, body: any) {
    return this.http.post(url, body);
  }

  put(url: string, body: any) {
    return this.http.put(url, body);
  }

  get(url: string) {
    return this.http.get<User[]>(url).pipe(
      map((resData) => {
        const dataArray = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            dataArray.push({ ...resData[key] });
          }
        }
        return dataArray;
      })
    );
  }

  patch(url: string, body: any) {
    return this.http.patch(url, body);
  }

  fetchUsers() {
    return this.http
      .get<User[]>(
        'https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      )
      .pipe(
        map((resData) => {
          const usersArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              usersArray.push({ ...resData[key] });
            }
          }
          return usersArray;
        })
      );
  }

  fetchOffers() {
    return this.http
      .get<Offer[]>(
        'https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/offers.json'
      )
      .pipe(
        map((resData) => {
          const offersArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              offersArray.push({ ...resData[key] });
            }
          }
          return offersArray;
        })
      );
  }
}
