import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthPageComponent } from 'src/app/pages/auth-page/auth-page.component';
import { CreateOfferPageComponent } from 'src/app/pages/create-offer-page/create-offer-page.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { OfferComponent } from 'src/app/pages/home-page/offer/offer.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
import { ProfilePageComponent } from 'src/app/pages/profile-page/profile-page.component';
import { SignUpPageComponent } from 'src/app/pages/sign-up-page/sign-up-page.component';

type PathMatch = 'prefix' | 'full';

const appRoutes = [
  // { path: '', component: StartingPageComponent },
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
