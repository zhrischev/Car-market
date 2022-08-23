import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import { OfferService } from './services/offers.service';
import { RenderOffersComponent } from './home-page/render-all-offers/render-offers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RenderMyOffersComponent } from './home-page/render-my-offers/render-my-offers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RenderProfilComponent } from './profile/render-profile/render-profil.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { OfferComponent } from './home-page/offer/offer.component';
import { StartingComponent } from './starting/starting.component';
import { PriceFormatDirective } from './directives/price.directive';
import { EditOfferComponent } from './home-page/edit-offer/edit-offer.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateOfferComponent,
    ProfileComponent,
    PageNotFoundComponent,
    RenderOffersComponent,
    RenderMyOffersComponent,
    RenderProfilComponent,
    EditProfileComponent,
    OfferComponent,
    StartingComponent,
    PriceFormatDirective,
    EditOfferComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [ProfileService, OfferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
