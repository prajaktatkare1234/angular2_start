import { Component, OnInit } from '@angular/core';
import { NavigationbarComponent } from '../navigationbar/navigationbar.component';
import {RouterModule, Routes, Router} from '@angular/router';
import { AppService } from '../app.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NavigationbarComponent, FilterPipe],
  // pipes:[]
})
export class HomeComponent implements OnInit {
  posts: any = [];
  data: any;
  filterValue: any;
  public content = {
    manufacturer: [],
    storage: [],
    camera: [],
    os: []
  };
  newdata: any = [];
  dont: any;

  constructor(private postsService: AppService, private router: Router) { }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('mobile'));
    console.log(this.data);
    this.newdata = this.data;
  }



  onClicked(value: any) {
    this.filterValue = value;

    let newArray = new Array();

    this.content[value.head].push(value.content);
    console.log(value.content);
    console.log(this.content);



if(value.head=="manufacturer"){
  this.newdata=this.data;
}
if(value.head=="os"){
  this.newdata=this.data;
}
// if(value.head=="storage"){
//   this.newdata=this.data;
// }
// if(value.head=="camera"){
//   this.newdata=this.data;
// }

    for (let datas in this.newdata) { // for objects in data array
      let m = this.content[value.head]; //array of head eg: manufacturer
      for (let n in this.content[value.head]) // loop for array of head eg:manufacturer
      {
        let d = this.newdata[datas].specs[value.head];//content value of head in data array
        let cont = m[n];//value of content in head array
        if (cont == d) {
          let a = this.newdata[datas];
          newArray.push(a)
          console.log(newArray, "fgrfd")
          var unique = newArray.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
          })
          this.dont = unique;
        }
      }
    }

    this.newdata = [];
    console.log(this.dont);
    this.newdata = this.dont;
    console.log(this.newdata);




  }



























  buy(value: any) {
    console.log(value);
    let buy = JSON.stringify(value);
    localStorage.setItem('buy', buy);
  }
}
