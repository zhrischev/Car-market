import { Component, OnInit } from '@angular/core';
import { Offer } from '../models/offer.model';
import { OfferService } from '../offers/offers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  offers: Offer[];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offers = this.offerService.getAllOffers();
  }
}
