import { Component, OnDestroy, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit, OnDestroy {
  offerId: string;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.offerId = this.route.snapshot.params['id'];
    console.log(this.offerId);
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => (this.offerId = params['id'])
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
