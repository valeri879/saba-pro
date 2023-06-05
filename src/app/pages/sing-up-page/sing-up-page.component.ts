import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.scss']
})
export class SingUpPageComponent implements OnInit {
  
  public singUpForm!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.singUpForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required]],
      nickNames: this._fb.array([])
    })
  };

  get nickNames(): FormArray {
    return this.singUpForm.controls['nickNames'] as FormArray;
  }

  addNickName() {
    this.nickNames.push(new FormControl(null));
  }

  removeNickName(i: number) {
    this.nickNames.removeAt(i);
  }
}
