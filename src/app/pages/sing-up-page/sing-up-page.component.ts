import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.scss']
})
export class SingUpPageComponent implements OnInit {
  
  public singUpForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.singUpForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    })
  };

  signUp() {
    this._authService.signUp(this.singUpForm.value).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err);
      }
    )
  }

}
