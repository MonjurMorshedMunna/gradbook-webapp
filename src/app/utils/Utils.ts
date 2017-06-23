import {RequestOptions} from '@angular/http';

export class Utils{

  static headers():Promise<any>{
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
}
