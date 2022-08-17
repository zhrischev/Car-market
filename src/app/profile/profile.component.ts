import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  isEditProfileClicked = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.profileService.getUserByEmail(
      this.profileService.getMainProfile().eMail
    );
  }

  onEditProfile() {
    this.isEditProfileClicked = !this.isEditProfileClicked;
  }
}
