
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from '../authentication/AuthService';
import {User} from '../../models/User';


@Injectable()
export class RegistrationService{

  constructor(private http: Http, private authService: AuthService){

  }

  registerUser(user: User):Promise<boolean>{

    const url = 'http://localhost:8111/register';

   return new Promise<boolean>((resolve, reject)=>{
     this.authService.registrationHeaders().then((headers:any)=>{
       this.http
         .post(url, JSON.stringify(user),headers)
         .toPromise()
         .then(()=>{
          resolve(true);
         })
         .catch(()=>{
         resolve(false);
         });
     });
   });

  }

}
