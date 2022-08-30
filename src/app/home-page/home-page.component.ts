import {
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { take } from 'rxjs';
import { Offer } from '../models/offer.model';
import { HttpService } from '../services/http.service';
import { OfferService } from '../services/offers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  isLoading = true;
  isMyOffersClicked = false;
  allOffersBtnClass = 'active';
  myOffersBtnClass = '';
  errorMessage: string = null;

  constructor(private http: HttpService, private offersService: OfferService) {}

  ngOnInit(): void {
    this.http.fetchOffers().subscribe(
      (resData) => {
        this.offersService.setOffers(resData);
        this.isLoading = false;
      },
      (error) => {
        this.offersService.resetOffers();
        this.errorMessage = error.error.error;
        console.log(error);
        this.isLoading = false;
      }
    );
  }

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
