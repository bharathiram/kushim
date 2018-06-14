import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ProfileInfo } from './profileInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<message></message>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile Info';
  profiles: ProfileInfo[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit () {
    this.profiles = this.profileService.getAll();
  }
}
