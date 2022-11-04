import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/user.model';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;
  loggedUser: User;
  isSaveChangesClicked = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loggedUser = this.profileService.getLoggedUser();

    this.visualizeUserDataInForm();
  }

  visualizeUserDataInForm() {
    this.profileForm = new FormGroup({
      email: new FormControl(this.loggedUser.eMail, Validators.required),
      firstName: new FormControl(
        this.loggedUser.firstName,
        Validators.required
      ),
      lastName: new FormControl(this.loggedUser.lastName, Validators.required),
      phone: new FormControl(this.loggedUser.phoneNumber, Validators.required),
      city: new FormControl(this.loggedUser.address.city, Validators.required),
      street: new FormControl(
        this.loggedUser.address.street,
        Validators.required
      ),
      streetNumber: new FormControl(
        this.loggedUser.address.streetNumber,
        Validators.required
      ),
      postCode: new FormControl(
        this.loggedUser.address.postCode,
        Validators.required
      ),
      photoURL: new FormControl(this.loggedUser.photo, Validators.required),
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
      new Address(street, city, postCode, streetNumber),
      phone,
      photoURL
    );
    return user;
  }

  changeProfileData() {
    const userDataForEdit = this.saveProfileFormData();
    if (userDataForEdit.firstName) {
      this.loggedUser.firstName = userDataForEdit.firstName;
    }
    if (userDataForEdit.lastName) {
      this.loggedUser.lastName = userDataForEdit.lastName;
    }
    if (userDataForEdit.phoneNumber) {
      this.loggedUser.phoneNumber = userDataForEdit.phoneNumber;
    }
    if (userDataForEdit.photo) {
      this.loggedUser.photo = userDataForEdit.photo;
    }
    if (userDataForEdit.address.city) {
      this.loggedUser.address.city = userDataForEdit.address.city;
    }
    if (userDataForEdit.address.postCode) {
      this.loggedUser.address.postCode = userDataForEdit.address.postCode;
    }
    if (userDataForEdit.address.street) {
      this.loggedUser.address.street = userDataForEdit.address.street;
    }
    if (userDataForEdit.address.streetNumber) {
      this.loggedUser.address.streetNumber =
        userDataForEdit.address.streetNumber;
    }
  }

  onSaveChanges() {
    this.changeProfileData();
    this.profileService.editLoggedUser(this.loggedUser);
    this.isSaveChangesClicked = true;
    // setTimeout(() => {
    //   this.isSaveChangesClicked = false;
    // }, 2000);
  }
}
