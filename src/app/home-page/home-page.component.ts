import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/offer.model';
import { OfferService } from '../services/offers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isMyOffersClicked = false;
  allOffersBtnClass = 'active';
  myOffersBtnClass = '';

  constructor() {}

  ngOnInit(): void {}

  onMyOffers() {
    this.isMyOffersClicked = true;
    this.allOffersBtnClass = '';
    this.myOffersBtnClass = 'active';
  }
  onAllOffers() {
    this.isMyOffersClicked = false;
    this.allOffersBtnClass = 'active';
    this.myOffersBtnClass = '';
  }
}
