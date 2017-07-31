import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AppService {
  resObj;
  options: Array<any>;



  constructor(private http: Http) {
    this.options = [
      {
        head: 'manufacturer',
        content: ['Samsung', 'Apple', 'ZTE', 'HTC','Sony']
      },
      {
        head: 'os',
        content: ['Android', 'iOS', 'Windows']
      },
      {
        head: 'storage',
        content: [16, 32]
      },
      {
        head: 'camera',
        content: [8,12,15]
      },
    ];
  }


  register(obj: Object) {
    return this.http.post('/signUp', obj)
      .map(res => {
        return this.resObj = res
      });
  }


  login(obj: Object) {
    return this.http.post('https://choco-lava.herokuapp.com/api/login', obj)
      .map(res => {
        return this.resObj = res
      });
  }

  logout(obj: Object) {
    console.log("skhfdsfh");
    return this.http.post('/logout', obj)
      .map(res => {
        return this.resObj = res
      });
  }

  getOptions() {
         return this.options;
     }

    //  getmobDetail(obj: Object) {
    //    return this.http.post('https://choco-lava.herokuapp.com/api/login', obj)
    //      .map(res => {
    //        return this.resObj = res
    //      });
    //  }


}
