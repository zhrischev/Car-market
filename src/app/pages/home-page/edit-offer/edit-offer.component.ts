import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css'],
})
export class EditOfferComponent implements OnInit {
  offer: Offer;
  offerForm: FormGroup;

  constructor(
    private offerService: OfferService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const offerId = this.route.snapshot.params['id'];
    this.offer = this.offerService.getOfferById(offerId);
    this.initForm();
  }

  private initForm() {
    const formArray = new FormArray([]);
    for (let i = 1; i < this.offer.photos.length; i++) {
      formArray.push(new FormControl(this.offer.photos[i]));
    }

    this.offerForm = new FormGroup({
      make: new FormControl(this.offer.make, Validators.required),
      model: new FormControl(this.offer.model, Validators.required),
      year: new FormControl(this.offer.year, Validators.required),
      price: new FormControl(this.offer.price, Validators.required),
      fuelType: new FormControl(this.offer.fuelType),
      enginePower: new FormControl(this.offer.enginePower, Validators.required),
      transmission: new FormControl(this.offer.transmission),
      coverPhoto: new FormControl(this.offer.photos[0], Validators.required),
      photos: formArray,
    });
  }

  get controls() {
    return (<FormArray>this.offerForm.get('photos')).controls;
  }

  editOffer() {
    this.offer.make = this.offerForm.value.make;
    this.offer.model = this.offerForm.value.model;
    this.offer.year = +this.offerForm.value.year;
    this.offer.price = +this.offerForm.value.price;
    this.offer.fuelType = this.offerForm.value.fuelType;
    this.offer.enginePower = +this.offerForm.value.enginePower;
    this.offer.transmission = this.offerForm.value.transmission;
    const additionalPhotos = this.offerForm.value.photos;

    this.offer.photos = [];
    this.offer.photos[0] = this.offerForm.value.coverPhoto;
    if (additionalPhotos) {
      for (const photo of additionalPhotos) {
        let i = 1;
        this.offer.photos[i] = photo;
        i++;
      }
    }
  }

  onEditOffer() {
    this.editOffer();
    this.offerService.editOffer(this.offer);
    alert('The changes were saved!');
  }

  onAddPhoto() {
    (<FormArray>this.offerForm.get('photos')).push(new FormControl(null));
  }

  onRemovePhoto(index) {
    (<FormArray>this.offerForm.get('photos')).removeAt(index);
  }
}
