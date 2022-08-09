import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OfferService } from '../offers/offers.service';

@Component({
  selector: 'app-create-offert',
  templateUrl: './create-offert.component.html',
  styleUrls: ['./create-offert.component.css'],
})
export class CreateOffertComponent implements OnInit {
  @ViewChild('makeInput') makeInputRef: ElementRef;
  constructor(private offerService: OfferService) {}

  ngOnInit(): void {}

  createOffer() {
    console.log(this.makeInputRef.nativeElement.value);
    this.makeInputRef.nativeElement.value = '';
  }
}
