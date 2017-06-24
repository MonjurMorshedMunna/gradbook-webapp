import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User';
import {AuthService} from '../../services/authentication/AuthService';
import {RegistrationService} from '../../services/registration/RegistrationService';
import {Router} from '@angular/router';

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
  user: User = <User>{};
  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private registrationService: RegistrationService,
              private router: Router){

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

  registerUser(){
    this.user.email = this.userForm.value.email;
    this.user.firstName = this.userForm.value.firstName;
    this.user.lastName = this.userForm.value.lastName;
    this.user.password = this.userForm.value.password;
    this.registrationService.registerUser(this.user).then((success:boolean)=>{
      if(success)
        this.router.navigateByUrl('/login');
      else
        this.router.navigateByUrl('/register');
    });
  }
}
