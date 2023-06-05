import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup;
  
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
    this.email.valueChanges.subscribe(
      email => {
        console.log(email);
      }
    );
  }

  get email(): FormControl {
    return this.loginForm.controls['email'] as FormControl;
  }

  signIn() {
    console.log(this.loginForm);
  }
}
