import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { CreateOfferPageComponent } from './create-offer-page/create-offer-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferComponent } from './home-page/offer/offer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StartingPageComponent } from './starting-page/starting-page.component';

const appRoutes = [
  { path: '', component: StartingPageComponent },
  { path: 'create-offer', component: CreateOfferPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'home/:id', component: OfferComponent },
  { path: 'account', component: AuthPageComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
