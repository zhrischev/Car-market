import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { CreateOfferPageComponent } from './create-offer-page/create-offer-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferComponent } from './home-page/offer/offer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

type PathMatch = 'prefix' | 'full';

const appRoutes = [
  // { path: '', component: StartingPageComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' as PathMatch },
  { path: 'create-offer', component: CreateOfferPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'home/:id', component: OfferComponent },
  { path: 'login', component: AuthPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
