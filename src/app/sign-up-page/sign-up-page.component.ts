import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';
import { User } from '../models/user.model';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {}

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

    authObs = this.authService.singup(email, password);

    authObs.subscribe(
      (dataRes) => {
        this.profileService.createUser(user);
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
