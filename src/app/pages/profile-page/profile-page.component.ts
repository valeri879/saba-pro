import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  prifileService = inject(ProfileService);

  profileData$!: Observable<any>;

  ngOnInit(): void {
    this.profileData$ = this.prifileService.getProfile();
  }
}
