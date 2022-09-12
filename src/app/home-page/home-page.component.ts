import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Offer } from '../models/offer.model';
import { HttpService } from '../services/http.service';
import { OfferService } from '../services/offers.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isLoading = true;
  isMyOffersClicked = false;
  allOffersBtnClass = 'active';
  myOffersBtnClass = '';
  errorMessage: string = null;
  offers: Offer[] = [];
  renderedOffers: Offer[] = [];
  loggedUserEmail: string;
  allOffersMake: string[] = [];

  constructor(
    private http: HttpService,
    private offersService: OfferService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/offers.json'
      )
      .subscribe(
        (resData) => {
          this.offersService.setOffers(resData);
          this.isLoading = false;
          this.offers = resData;
          this.allOffersMake = this.offersService.getAllUniqueMakes();
          this.loggedUserEmail = this.profileService.getLoggedUser().eMail;
        },
        (error) => {
          this.offersService.resetOffers();
          this.errorMessage = error.error.error;
          console.log(error);
          this.isLoading = false;
        }
      );
  }

  onMyOffers() {
    this.allOffersBtnClass = '';
    this.myOffersBtnClass = 'active';
    this.offers = this.offersService.getOffersCreatedBy(this.loggedUserEmail);
    this.isMyOffersClicked = true;
  }
  onAllOffers() {
    this.allOffersBtnClass = 'active';
    this.myOffersBtnClass = '';
    this.offers = this.offersService.getAllOffers();
    this.isMyOffersClicked = false;
  }

  orderOffersByPriceAsc() {
    this.offers = this.offers.sort((a, b) => a.price - b.price);
  }

  orderOffersByPriceDesc() {
    this.offers = this.offers.sort((a, b) => b.price - a.price);
  }

  orderOffersByCreateDateAsc() {
    this.offers = this.offers.sort((a, b) => {
      if (a.createDate > b.createDate) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  orderOffersByCreateDateDesc() {
    this.offers = this.offers.sort((a, b) => {
      if (a.createDate < b.createDate) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  orderOffersByMakeAsc() {
    this.offers = this.offers.sort((a, b) => {
      if (a.make < b.make) {
        return -1;
      }
      if (a.make > b.make) {
        return 1;
      }
      return 0;
    });
  }

  orderOffersByMakeDesc() {
    this.offers = this.offers.sort((a, b) => {
      if (a.make < b.make) {
        return 1;
      }
      if (a.make > b.make) {
        return -1;
      }
      return 0;
    });
  }

  onSubmit(makeForm: NgForm) {
    let isMakeFromEmpty = true;
    for (const make in makeForm.value) {
      if (makeForm.value[make]) {
        isMakeFromEmpty = false;
      }
    }
    if (isMakeFromEmpty) {
      this.renderOffersDependsOnIsMyOffersClicked();
      return;
    }

    let filteredOffes: Offer[] = [];

    for (const make in makeForm.value) {
      if (makeForm.value[make]) {
        filteredOffes.push(
          ...this.offers.filter((offer) => offer.make === make)
        );
      }
    }

    this.offers = filteredOffes;
  }

  onClearFilter(makeForm: NgForm) {
    this.renderOffersDependsOnIsMyOffersClicked();
    makeForm.reset();
  }

  renderOffersDependsOnIsMyOffersClicked() {
    if (this.isMyOffersClicked) {
      this.offers = this.offersService.getOffersCreatedBy(this.loggedUserEmail);
    } else {
      this.offers = this.offersService.getAllOffers();
    }
  }
}
