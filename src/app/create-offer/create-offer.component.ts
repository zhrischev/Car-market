import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Offer } from '../models/offer.model';
import { OfferService } from '../services/offers.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
})
export class CreateOfferComponent implements OnInit {
  offerForm: FormGroup;

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerForm = new FormGroup({
      make: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      fuelType: new FormControl('Petrol'),
      enginePower: new FormControl(null, Validators.required),
      transmission: new FormControl('Manual'),
      photoURL: new FormControl(null, Validators.required),
      creatorEmail: new FormControl('zaprin@abv.bg'),
    });
  }

  createOffer() {
    const make = this.offerForm.value.make;
    const model = this.offerForm.value.model;
    const year = +this.offerForm.value.year;
    const price = +this.offerForm.value.price;
    const fuelType = this.offerForm.value.fuelType;
    const enginePower = +this.offerForm.value.enginePower;
    const transmission = this.offerForm.value.transmission;
    const photoURL = this.offerForm.value.photoURL;
    const creatorEmail = this.offerForm.value.creatorEmail;
    const offer = new Offer(
      make,
      model,
      year,
      price,
      fuelType,
      enginePower,
      transmission,
      photoURL,
      creatorEmail
    );
    return offer;
  }

  onCreateOffer() {
    const offer = this.createOffer();
    this.offerService.addOffer(offer);
    console.log(this.offerService);
    this.offerForm.reset();
    alert('The offer was created!');
  }
}
