import { Injectable } from '@angular/core';

import { Offer } from 'src/app/models/offer.model';

@Injectable()
export class OfferService {
  private offers: Offer[] = [
    new Offer(
      'BMW',
      'M3',
      2003,
      19999,
      'Petrol',
      360,
      'Manual',
      'https://automedia.investor.bg/media/files/resized/uploadedfiles/640x0/228/32fc3c87da2834657647bab5753ff228-03-1.jpg',
      'zaprin@abv.bg'
    ),
    new Offer(
      'Audi',
      'A3',
      2003,
      1999,
      'Diesel',
      131,
      'Manual',
      'https://cdn3.focus.bg/autodata/i/audi/a3/a3-8l/large/efe20d6374603bcdbc549c93cd3024ff.jpg',
      'test@abv.bg'
    ),
  ];

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
  }

  deleteOffer(offer: Offer) {
    const indexOfDeletedOffer = this.offers.indexOf(offer);
    this.offers.splice(indexOfDeletedOffer, 1);
  }
}
