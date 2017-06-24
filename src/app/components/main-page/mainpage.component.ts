
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from '../../services/authentication/AuthService';
import {User} from '../../models/User';

@Component({
  selector:'main-page',
  templateUrl: './mainpage.component.html'
})

export class MainPageComponent implements OnInit{
  title = 'app';
  authenticated: boolean = false;
  loggedUser: User = <User>{};

  constructor(private http: Http, private authService: AuthService){
    localStorage.removeItem('authenticated');
  }

  ngOnInit(){
    console.log("In ng on it");
    if(localStorage.getItem('isAuthenticated')==="true"){
      this.authenticated = true;
      this.authService.loggedUser().then((user:User)=>{
        this.loggedUser = user;
      });
    }


  }
}
