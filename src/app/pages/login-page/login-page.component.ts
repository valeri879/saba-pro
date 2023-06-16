import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup;

  private _authService = inject(AuthService);
  
/*   new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.maxLength(255),
      Validators.minLength(5)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(255)
    ])
  }); */

  constructor(
    private _fb: FormBuilder
  ) {

  }

  private _initForm() {
    this.loginForm = this._fb.group({
      email: [ null, [
          Validators.required,
          Validators.email,
          Validators.maxLength(255),
          Validators.minLength(5)
        ]
      ],
      password: [ null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(255)
      ]
    ],
    });
  }

  ngOnInit(): void {
    this._initForm();
  }

  get email(): FormControl {
    return this.loginForm.controls['email'] as FormControl;
  }

  signIn() {
    this._authService.login(this.loginForm.value).subscribe(
      () => {},
      err => {
        console.log(err.error);
      }
    );
  }
}
