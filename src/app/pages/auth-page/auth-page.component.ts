import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
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
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    authObs = this.authService.signin(email, password);

    authObs.subscribe(
      (dataRes) => {
        this.profileService.logUser(email);
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

  onSignUp() {}
}
