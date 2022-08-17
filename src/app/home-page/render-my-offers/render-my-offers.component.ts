import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-render-my-offers',
  templateUrl: './render-my-offers.component.html',
  styleUrls: ['./render-my-offers.component.css'],
})
export class RenderMyOffersComponent implements OnInit {
  myOffers: Offer[];

  constructor(private offersService: OfferService) {}

  ngOnInit(): void {
    this.myOffers = this.offersService.getAllMyOffers();
  }
}
