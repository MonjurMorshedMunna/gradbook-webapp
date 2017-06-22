import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Route, Router} from '@angular/router';
import {User} from '../../models/User';

import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthService{
  isAuthenticated: boolean = false;
  userId: string;

  constructor(private http:Http){

  }
  login(user: User){
    let client_id= 'gradbook';
    let client_secret = 'gradbook';
    var basicHeader = btoa(client_id+":"+client_secret);

    var headers: any = new Headers();
    headers.append("Authorization", "Basic "+ basicHeader);
    headers.append("Accept", "application/json");
    headers.append('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');


    console.log("Headers!");
    console.log(headers);
    let options = new RequestOptions({headers:headers});

    var creds:string = 'grant_type=password&username=monjurmorshed794@outlook.com&password=password';
   // creds = 'username=' + user.email+ '&password=' +  user.password+'credentials=true&grant_type=password&scope=read%20write&client_secret=gradbook&client_id=gradbook';
    console.log(JSON.stringify(creds));
    /*return new Promise((resolve)=>{
     this.http.post('http://localhost:9090/oauth/token', creds,options).subscribe((data)=>{
     if(data.json().success){
     this.userId = data.json().userId;
     this.isAuthenticated = true;
     console.log("data--->");
     console.log(data.json());
     }
     resolve(this.isAuthenticated);
     });
     });*/
    return this.http.post('http://localhost:9090/oauth/token?grant_type=password&username=monjurmorshed794@outlook.com&password=password', creds, options)
      .toPromise()
      .then((res=> console.log(res)))
      .catch();
  }
}
