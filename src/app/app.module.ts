import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CreateOfferPageComponent } from './pages/create-offer-page/create-offer-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import { OfferService } from './services/offers.service';
import { RenderOffersComponent } from './pages/home-page/render-offers/render-offers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { RenderProfilComponent } from './pages/profile-page/render-profile/render-profil.component';
import { EditProfileComponent } from './pages/profile-page/edit-profile/edit-profile.component';
import { OfferComponent } from './pages/home-page/offer/offer.component';
import { StartingPageComponent } from './pages/starting-page/starting-page.component';
import { PriceFormatDirective } from './directives/price.directive';
import { EditOfferComponent } from './pages/home-page/edit-offer/edit-offer.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { OfferFormComponent } from './shared/offer-form/offer-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateOfferPageComponent,
    ProfilePageComponent,
    PageNotFoundComponent,
    RenderOffersComponent,
    RenderProfilComponent,
    EditProfileComponent,
    OfferComponent,
    StartingPageComponent,
    PriceFormatDirective,
    EditOfferComponent,
    AuthPageComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    OfferFormComponent,
    SignUpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
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
