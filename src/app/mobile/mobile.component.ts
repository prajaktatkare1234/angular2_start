import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
data:any;
  constructor() { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('buy'));
    console.log(this.data);
  }

}
