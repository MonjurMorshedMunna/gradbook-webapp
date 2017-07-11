import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {User} from '../../models/User';
import {AuthService} from '../../services/authentication/AuthService';
import {Router} from '@angular/router';
import {NotificationService} from 'ng2-notify-popup';




@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})



export class LoginComponent implements OnInit{
  user: User;
  userForm: FormGroup;
  showLoader: boolean = false;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private notify: NotificationService){

  }

  ngOnInit():void{
    this.userForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }

  heroForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl()
  });

  submit():void{
    this.user = <User>{};
    this.user.email = this.userForm.value.email;
    this.user.password = this.userForm.value.password;


    this.showLoader=true;

    this.authService.login(this.user).then((success:boolean)=>{
    });
  }
}
