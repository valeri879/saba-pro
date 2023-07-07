import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DeleteConfirmationComponent } from 'src/app/dialogs/delete-confirmation/delete-confirmation.component';
import { CvService } from 'src/app/services/cv.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  prifileService = inject(ProfileService);
  cvService = inject(CvService);

  constructor(
    private _matDialog: MatDialog
  ) {

  }

  profileData$!: Observable<any>;

  ngOnInit(): void {
    this.profileData$ = this.prifileService.getProfile();
  }

  delete() {
    const dialog = this._matDialog.open(DeleteConfirmationComponent, {
      width: '440px',
      data: {
        message: 'გსურთ თუ არა CV-ის წაშლა 👋'
      }
    });

    dialog.afterClosed().subscribe(
      res => {
        if (res) {
          this.cvService.delete().subscribe(
            res => {
              console.log(res);
            }
          )
        }
      }
    )
  }
}
