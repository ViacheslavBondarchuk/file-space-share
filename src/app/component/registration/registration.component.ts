import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  private readonly formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', {validators: [Validators.required, Validators.pattern(/[A-Za-z]/)]}),
      lastname: new FormControl('', {validators: [Validators.required, Validators.pattern(/[A-Za-z]/)]}),
      username: new FormControl('', {validators: [Validators.required, Validators.minLength(6)]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6)]})
    });
  }

  ngOnInit(): void {
  }

  public get form() {
    return this.formGroup;
  }

  public get firstname() {
    return this.formGroup.get('firstname');
  }

  public get lastname() {
    return this.formGroup.get('lastname');
  }

  public get username() {
    return this.formGroup.get('username');
  }

  public get email() {
    return this.formGroup.get('email');
  }

  public get password() {
    return this.formGroup.get('password');
  }

}


