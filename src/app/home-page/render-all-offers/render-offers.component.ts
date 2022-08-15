import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-render-offers',
  templateUrl: './render-offers.component.html',
  styleUrls: ['./render-offers.component.css'],
})
export class RenderOffersComponent implements OnInit {
  allOffers: Offer[];

  constructor(private offersService: OfferService) {}

  ngOnInit(): void {
    this.allOffers = this.offersService.getAllOffers();
  }
}
