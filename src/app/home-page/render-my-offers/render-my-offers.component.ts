import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { User } from 'src/app/models/user.model';
import { OfferService } from 'src/app/services/offers.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-render-my-offers',
  templateUrl: './render-my-offers.component.html',
  styleUrls: ['./render-my-offers.component.css'],
})
export class RenderMyOffersComponent implements OnInit {
  myOffers: Offer[];
  loggedUser: User;

  constructor(
    private offersService: OfferService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.profileService.getLoggedUser();
    this.myOffers = this.offersService.getOffersCreatedBy(
      this.loggedUser.eMail
    );
  }
}
