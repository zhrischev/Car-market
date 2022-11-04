import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Offer } from 'src/app/models/offer.model';
import { OfferService } from 'src/app/services/offers.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-create-offer-page',
  templateUrl: './create-offer-page.component.html',
  styleUrls: ['./create-offer-page.component.css'],
})
export class CreateOfferPageComponent implements OnInit {
  offerForm: FormGroup;

  constructor(
    private offerService: OfferService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.offerForm = new FormGroup({
      make: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      fuelType: new FormControl('Petrol'),
      enginePower: new FormControl(null, Validators.required),
      transmission: new FormControl('Manual'),
      coverPhoto: new FormControl(null, Validators.required),
      creatorEmail: new FormControl(this.profileService.getLoggedUser().eMail),
      photos: new FormArray([]),
    });
  }

  get controls() {
    return (<FormArray>this.offerForm.get('photos')).controls;
  }

  createOffer() {
    const make = this.offerForm.value.make;
    const model = this.offerForm.value.model;
    const year = +this.offerForm.value.year;
    const price = +this.offerForm.value.price;
    const fuelType = this.offerForm.value.fuelType;
    const enginePower = +this.offerForm.value.enginePower;
    const transmission = this.offerForm.value.transmission;
    const coverPhoto = this.offerForm.value.coverPhoto;
    const additionalPhotos = this.offerForm.value.photos;
    const offer = new Offer(
      make,
      model,
      year,
      price,
      fuelType,
      enginePower,
      transmission,
      [],
      this.profileService.getLoggedUser().eMail
    );
    offer.photos.push(coverPhoto);
    console.log(additionalPhotos);
    if (additionalPhotos) {
      for (const photo of additionalPhotos) {
        offer.photos.push(photo);
      }
    }
    return offer;
  }

  onCreateOffer() {
    const offer = this.createOffer();
    this.offerService.addOffer(offer);
    console.log(this.offerService);
    this.offerForm.reset();
    alert('The offer was created!');
  }

  onAddPhoto() {
    (<FormArray>this.offerForm.get('photos')).push(new FormControl(null));
  }

  onRemovePhoto(index) {
    (<FormArray>this.offerForm.get('photos')).removeAt(index);
  }
}
