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

  getAllUniqueMakes() {
    const allUniqueMakes = new Set(this.offers.map((offer) => offer.make));
    return Array.from(allUniqueMakes);
  }

  addOffer(offer: Offer) {
    this.offers.push(offer);
    const url = `https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/offers/${offer.id}.json`;
    this.http.put(url, offer).subscribe();
  }

  setOffers(offers: Offer[]) {
    this.offers = offers;
    this.offersChanged.next(this.offers.slice());
  }

  editOffer(offer: Offer) {
    const url = `https://car-market-7b838-default-rtdb.europe-west1.firebasedatabase.app/offers/${offer.id}.json`;
    this.http.patch(url, offer).subscribe();
  }

  resetOffers() {
    this.offers = [];
  }

  deleteOffer(offer: Offer) {
    const indexOfDeletedOffer = this.offers.indexOf(offer);
    this.offers.splice(indexOfDeletedOffer, 1);
  }
}
