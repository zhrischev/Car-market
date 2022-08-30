import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  isEditProfileClicked = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  onEditProfile() {
    this.isEditProfileClicked = !this.isEditProfileClicked;
  }
}
