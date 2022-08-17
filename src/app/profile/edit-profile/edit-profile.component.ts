import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from '../../models/user.model';
import { Adress } from '../../models/adress.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.profileService.getUserByEmail('zaprin@abv.bg');

    this.visualizeUserDataInForm();
  }

  visualizeUserDataInForm() {
    this.profileForm = new FormGroup({
      email: new FormControl(this.user.eMail, Validators.required),
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      phone: new FormControl(this.user.phoneNumber, Validators.required),
      city: new FormControl(this.user.address.city, Validators.required),
      street: new FormControl(this.user.address.street, Validators.required),
      streetNumber: new FormControl(
        this.user.address.streetNumber,
        Validators.required
      ),
      postCode: new FormControl(
        this.user.address.postCode,
        Validators.required
      ),
      photoURL: new FormControl(this.user.photo, Validators.required),
    });
  }

  saveProfileFormData() {
    const email = this.profileForm.value.email;
    const firstName = this.profileForm.value.firstName;
    const lastName = this.profileForm.value.lastName;
    const phone = this.profileForm.value.phone;
    const city = this.profileForm.value.city;
    const street = this.profileForm.value.street;
    const streetNumber = +this.profileForm.value.streetNumber;
    const postCode = this.profileForm.value.postCode;
    const photoURL = this.profileForm.value.photoURL;
    const user = new User(
      email,
      firstName,
      lastName,
      new Adress(street, city, postCode, streetNumber),
      phone,
      photoURL
    );
    return user;
  }

  selectUser(userEmail: string) {
    this.user = this.profileService.getUserByEmail(userEmail);
    this.visualizeUserDataInForm();
  }

  changeProfileData() {
    const userDataForEdit = this.saveProfileFormData();
    if (userDataForEdit.firstName) {
      this.user.firstName = userDataForEdit.firstName;
    }
    if (userDataForEdit.lastName) {
      this.user.lastName = userDataForEdit.lastName;
    }
    if (userDataForEdit.phoneNumber) {
      this.user.phoneNumber = userDataForEdit.phoneNumber;
    }
    if (userDataForEdit.photo) {
      this.user.photo = userDataForEdit.photo;
    }
    if (userDataForEdit.address.city) {
      this.user.address.city = userDataForEdit.address.city;
    }
    if (userDataForEdit.address.postCode) {
      this.user.address.postCode = userDataForEdit.address.postCode;
    }
    if (userDataForEdit.address.street) {
      this.user.address.street = userDataForEdit.address.street;
    }
    if (userDataForEdit.address.streetNumber) {
      this.user.address.streetNumber = userDataForEdit.address.streetNumber;
    }
  }

  onSaveChanges() {
    this.changeProfileData();
    alert('All changes were saved successfully!');
  }
}
