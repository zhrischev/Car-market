import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from '../../models/user.model';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;
  mainProfile: User;
  users: User[];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.mainProfile = this.profileService.getMainProfile();
    this.users = this.profileService.getAllUsers();

    this.visualizeUserDataInForm();
  }

  visualizeUserDataInForm() {
    this.profileForm = new FormGroup({
      email: new FormControl(this.mainProfile.eMail, Validators.required),
      firstName: new FormControl(
        this.mainProfile.firstName,
        Validators.required
      ),
      lastName: new FormControl(this.mainProfile.lastName, Validators.required),
      phone: new FormControl(this.mainProfile.phoneNumber, Validators.required),
      city: new FormControl(this.mainProfile.address.city, Validators.required),
      street: new FormControl(
        this.mainProfile.address.street,
        Validators.required
      ),
      streetNumber: new FormControl(
        this.mainProfile.address.streetNumber,
        Validators.required
      ),
      postCode: new FormControl(
        this.mainProfile.address.postCode,
        Validators.required
      ),
      photoURL: new FormControl(this.mainProfile.photo, Validators.required),
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

  selectUser(userEmail: string) {
    this.mainProfile = this.profileService.getUserByEmail(userEmail);
    this.visualizeUserDataInForm();
  }

  changeProfileData() {
    const userDataForEdit = this.saveProfileFormData();
    if (userDataForEdit.firstName) {
      this.mainProfile.firstName = userDataForEdit.firstName;
    }
    if (userDataForEdit.lastName) {
      this.mainProfile.lastName = userDataForEdit.lastName;
    }
    if (userDataForEdit.phoneNumber) {
      this.mainProfile.phoneNumber = userDataForEdit.phoneNumber;
    }
    if (userDataForEdit.photo) {
      this.mainProfile.photo = userDataForEdit.photo;
    }
    if (userDataForEdit.address.city) {
      this.mainProfile.address.city = userDataForEdit.address.city;
    }
    if (userDataForEdit.address.postCode) {
      this.mainProfile.address.postCode = userDataForEdit.address.postCode;
    }
    if (userDataForEdit.address.street) {
      this.mainProfile.address.street = userDataForEdit.address.street;
    }
    if (userDataForEdit.address.streetNumber) {
      this.mainProfile.address.streetNumber =
        userDataForEdit.address.streetNumber;
    }
  }

  onSaveChanges() {
    this.changeProfileData();
    alert('All changes were saved successfully!');
  }
}
