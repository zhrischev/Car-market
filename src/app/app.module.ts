import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateOffertComponent } from './create-offer/create-offert.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile/profile.service';
import { OffersComponent } from './offers/offers.component';
import { OfferService } from './offers/offers.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateOffertComponent,
    ProfileComponent,
    PageNotFoundComponent,
    OffersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProfileService, OfferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
