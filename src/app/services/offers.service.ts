import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Offer } from 'src/app/models/offer.model';
import { HttpService } from './http.service';

@Injectable()
export class OfferService {
  private offers: Offer[] = [];
  offersChanged = new Subject<Offer[]>();

  constructor(private http: HttpService) {}

  getAllOffers() {
    return this.offers;
  }

  getOfferById(id: string) {
    return this.offers.find((offer) => offer.id === id);
  }

  getOffersCreatedBy(email: string) {
    return this.offers.filter((offer) => offer.creatorEmail === email);
  }

  addOffer(offer: Offer) {
    this.offers.push(offer);
    this.http
      .post(
        'https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/offers.json',
        offer
      )
      .subscribe();
  }

  setOffers(offers: Offer[]) {
    this.offers = offers;
    this.offersChanged.next(this.offers.slice());
  }

  resetOffers() {
    this.offers = [];
  }

  deleteOffer(offer: Offer) {
    const indexOfDeletedOffer = this.offers.indexOf(offer);
    this.offers.splice(indexOfDeletedOffer, 1);
  }
}
