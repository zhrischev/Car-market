import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferComponent } from './home-page/offer/offer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes = [
  { path: 'create-offer', component: CreateOfferComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  {
    path: '',
    component: HomePageComponent,
    children: [{ path: ':id', component: OfferComponent }],
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
