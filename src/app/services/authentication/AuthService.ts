import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Route, Router} from '@angular/router';
import {User} from '../../models/User';

import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Utils} from '../../utils/Utils';
import {NotificationService} from 'ng2-notify-popup';
import {resolve} from 'q';


@Injectable()
export class AuthService{
  isAuthenticated: boolean = false;
  userId: string;

  constructor(private http:Http, private notify: NotificationService){

  }
  login(user: User):Promise<boolean>{

    let successStatus = false;

    this.headers().then((options)=>{
      var creds:string = 'grant_type=password&username='+user.email+'&password='+user.password;
      console.log(JSON.stringify(creds));
      this.http.post('http://localhost:9090/oauth/token', creds, options)
        .subscribe((res=> {
          var json=res.json();
          console.log(json.access_token);
          localStorage.removeItem('auth_token');
          localStorage.setItem('auth_token', json.access_token);
          localStorage.setItem('isAuthenticated','true');
          successStatus = true;
          resolve(successStatus);

        }))
    });

    return Promise.resolve(successStatus);

  }

  headers():Promise<any>{
    let client_id= 'gradbook';
    let client_secret = 'gradbook';
    var basicHeader = btoa(client_id+":"+client_secret);

    var headers: any = new Headers();
    headers.append("Authorization", "Basic "+ basicHeader);
    headers.append("Accept", "application/json");
    headers.append('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = new RequestOptions({headers:headers});
    return Promise.resolve(options);
  }

  logout(){
    localStorage.removeItem('auth_token');
  }
}
