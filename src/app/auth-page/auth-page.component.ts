import { trigger } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
import { AuthService, AuthResponseData } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {}

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const phone = form.value.phone;
    const city = form.value.city;
    const postCode = form.value.postCode;
    const streetNumber = form.value.streetNumber;
    const streetName = form.value.street;
    const photo = form.value.photo;
    const address = new Address(streetName, city, postCode, streetNumber);
    const user = new User(email, firstName, lastName, address, phone, photo);
    console.log(user);
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.signin(email, password);
    } else {
      authObs = this.authService.singup(email, password);
    }

    authObs.subscribe(
      (dataRes) => {
        // if (this.isLoginMode) {
        //   this.isLoading = false;
        //   console.log(dataRes);
        //   this.router.navigate(['home']);
        // } else {
        //   // Send second request to profileService
        //   this.profileService.logUser(user);
        //   this.isLoading = false;
        //   this.router.navigate(['home']);
        // }
        if (this.isLoginMode) {
          this.profileService.logUser(email);
        } else {
          this.profileService.createUser(user);
        }
        this.isLoading = false;
        this.router.navigate(['home']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
        console.log(errorMessage);
      }
    );

    form.reset();
  }
}
