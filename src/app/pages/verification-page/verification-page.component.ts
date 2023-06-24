import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.scss']
})
export class VerificationPageComponent implements OnInit {
  
  private _authService = inject(AuthService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  public error!: string;
  public success!: string;

  public code: FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(6),
    Validators.minLength(6)
  ]);

  ngOnInit(): void {
    
  }

  verification() {
    this._authService.emialVerification(
      {
        ...this._route.snapshot.queryParams,
        code: this.code.value
      }
    ).subscribe(
      res => {
        this.success = res.data;
        this.code.disable();
        setTimeout(() => {
          this._router.navigateByUrl('profile');
        }, 5000);
        console.log(res);
      },
      err => {
        console.log(err)
        this.error = err.error.message;
      }
    )
  }
}
