import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOffertComponent } from './create-offer/create-offert.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes = [
  { path: '', component: HomePageComponent },
  { path: 'create-offert', component: CreateOffertComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
