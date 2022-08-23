import { Component, OnDestroy, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { OfferService } from 'src/app/services/offers.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit, OnDestroy {
  offerId: string;
  paramsSubscription: Subscription;
  offer: Offer;
  isEditMode = false;
  mainUserEmail: string;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.offerId = this.route.snapshot.params['id'];
    this.offer = this.offerService.getOfferById(this.offerId);
    this.mainUserEmail =
      this.profileService.getUserByEmail('zaprin@abv.bg').eMail;

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => (this.offerId = params['id'])
    );
  }

  onEditOffer() {
    this.isEditMode = !this.isEditMode;
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
