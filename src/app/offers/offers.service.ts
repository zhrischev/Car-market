import { Injectable } from '@angular/core';

import { Offer } from 'src/app/models/offer.model';

@Injectable()
export class OfferService {
  private offers: Offer[];

  getAllOffers() {
    return this.offers;
  }

  addOffer(offer: Offer) {
    this.offers.push(offer);
  }

  deleteOffer(offer: Offer) {
    const indexOfDeletedOffer = this.offers.indexOf(offer);
    this.offers.splice(indexOfDeletedOffer, 1);
  }
}
