import { Injectable } from '@angular/core';
// import {Observable,Subject,Subscriber} from 'rxjs/Rx';
// import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

  constructor(private http: Http) {}
    getAllPosts(obj :Object) {
   return this.http.post('/signUp',obj)
     .map(res => console.log(res));
 }


}
