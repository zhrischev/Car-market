import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-render-profile',
  templateUrl: './render-profil.component.html',
  styleUrls: ['./render-profil.component.css'],
})
export class RenderProfilComponent implements OnInit {
  user: User;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.profileService.getLoggedUser();
    console.log(this.user);
  }

  selectUser(userEmail: string) {
    this.user = this.profileService.getUserByEmail(userEmail);
  }
}
