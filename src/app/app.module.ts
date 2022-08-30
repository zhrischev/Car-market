import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateOfferPageComponent } from './create-offer-page/create-offer-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import { OfferService } from './services/offers.service';
import { RenderOffersComponent } from './home-page/render-all-offers/render-offers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RenderMyOffersComponent } from './home-page/render-my-offers/render-my-offers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RenderProfilComponent } from './profile-page/render-profile/render-profil.component';
import { EditProfileComponent } from './profile-page/edit-profile/edit-profile.component';
import { OfferComponent } from './home-page/offer/offer.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { PriceFormatDirective } from './directives/price.directive';
import { EditOfferComponent } from './home-page/edit-offer/edit-offer.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateOfferPageComponent,
    ProfilePageComponent,
    PageNotFoundComponent,
    RenderOffersComponent,
    RenderMyOffersComponent,
    RenderProfilComponent,
    EditProfileComponent,
    OfferComponent,
    StartingPageComponent,
    PriceFormatDirective,
    EditOfferComponent,
    AuthPageComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ProfileService,
    OfferService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
