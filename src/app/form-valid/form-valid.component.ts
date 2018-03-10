import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ElementDef } from '@angular/core/src/view';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-valid',
  templateUrl: './form-valid.component.html',
  styleUrls: ['./form-valid.component.css']
})
export class FormValidComponent implements OnInit {

  ngOnInit(): void {
   
  }
  public form:FormGroup;
  public name:AbstractControl;
  public phone:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;
  public errors: string;

  constructor(fb:FormBuilder) {

  this.form = fb.group({
    'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    'phone': ['', Validators.compose([Validators.required, Validators.minLength(11)])],
    'email': ['', Validators.compose([Validators.required])],//, EmailValidator.validate()
    'passwords': fb.group({
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })//, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
  });

  this.name = this.form.controls['name'];
  this.phone = this.form.controls['phone'];
  this.email = this.form.controls['email'];
  this.passwords = <FormGroup> this.form.controls['passwords'];
  this.password = this.passwords.controls['password'];
  this.repeatPassword = this.passwords.controls['repeatPassword'];
}

public onSubmit(values:Object):void {
  let that = this;
  this.submitted = true;
  if (this.form.valid) {
  ////  this.userService.register(values['name'], values['phone'], values['email'], values['passwords']['password']).subscribe((err:any) => {
     // that.errors = err;
    };
  }

}
