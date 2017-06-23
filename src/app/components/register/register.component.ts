import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User';
import {AuthService} from '../../services/authentication/AuthService';

function passwordMatcher(c: AbstractControl):{[key: string]:boolean} | null{
  let passwordControl = c.get('password');
  let confirmPasswordControl = c.get('retypePassword');

  if(passwordControl.pristine || confirmPasswordControl.pristine){
    return null;
  }
  if(passwordControl.value === confirmPasswordControl.value){
    return null;
  }
  return {'match':true};
}

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit{
  user: User;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){

  }

  ngOnInit():void{
    this.userForm = this.fb.group({
      email:['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      retypePassword: ['', Validators.required]
    },{validator: passwordMatcher});
  }
}
