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

   content = {
    manufacturer: [],
    storage: [],
    camera: [],
    os: []
  };
  newdata: any = [];
  dont: any;

  constructor(private postsService: AppService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('mobile')) {
      this.router.navigate(['/signin']);
    }
    this.data = JSON.parse(localStorage.getItem('mobile'));
    console.log(this.data);
  }

  onClicked(value: any) {

    if(value.clear){

      this.content = {
        manufacturer: [],
        storage: [],
        camera: [],
        os: []
      };

    }
    else{
       if (value.checked) {

          this.content[value.head].push(value.content);

        }
        else {
          let remove = this.content[value.head].indexOf(value.content);
          this.content[value.head].splice(remove, 1);
        }
      }


    this.newdata = this.data;
    var self = this;
    this.dont = this.newdata.filter(function(mobileObj) {
      let manufacturerFlag = (self.content.manufacturer.length > 0) ? (self.content.manufacturer.indexOf(mobileObj.specs.manufacturer) > -1) : true;
      let storageFlag = (self.content.storage.length > 0) ?
      (self.content.storage.indexOf(mobileObj.specs.storage) > -1) : true;
      let cameraFlag = (self.content.camera.length > 0) ?
      (self.content.camera.indexOf(mobileObj.specs.camera) > -1) : true;
      let osFlag = (self.content.os.length > 0) ?
      (self.content.os.indexOf(mobileObj.specs.os) > -1) : true;


      return (manufacturerFlag && storageFlag && cameraFlag && osFlag);
    });
    this.newdata = this.dont;
  }
  buy(value: any) {

    let buy = JSON.stringify(value);
    localStorage.setItem('buy', buy);
  }
}














    // }
/*
    // this.filtermanu();

    if (value.head == value.secondHead) {
        console.log(this.newdata);
        let newArray = new Array();
      console.log("sfjdskfjdskf",this.newdata);

      for (let datas in this.newdata) { // for objects in data array
        let m = this.content[value.head]; //array of head eg: manufacturer
        for (let n in this.content[value.head]) // loop for array of head eg:manufacturer
        {
          let d = this.newdata[datas].specs[value.head];//content value of head in data array
          let cont = m[n];//value of content in head array
          if (cont == d) {
            let a = this.newdata[datas];
            newArray.push(a)
            console.log(newArray)
            var unique = newArray.filter(function(elem, index, self) {
              return index == self.indexOf(elem);
            })
            this.dont = unique;
            console.log(this.dont);
          }
        }
      }
      this.secondHeadArray=this.dont;
      console.log(this.secondHeadArray);
    }

    if (value.head == value.thirdHead) {
        let newArray = new Array();
      console.log("third head");

      for (let datas in this.secondHeadArray) { // for objects in data array
        let m = this.content[value.head]; //array of head eg: manufacturer
        for (let n in this.content[value.head]) // loop for array of head eg:manufacturer
        {
          let d = this.secondHeadArray[datas].specs[value.head];//content value of head in data array
          let cont = m[n];//value of content in head array
          if (cont == d) {
            let a = this.secondHeadArray[datas];
            newArray.push(a)
            console.log(newArray)
            var unique = newArray.filter(function(elem, index, self) {
              return index == self.indexOf(elem);
            })
            this.dont = unique;
            console.log(this.dont);
          }
        }
      }
      this.thirdHeadArray=this.dont;
      console.log("in third after push",this.thirdHeadArray);

    }

    if (value.head == value.fourthHead) {
        let newArray = new Array();

      console.log("fourth head",this.thirdHeadArray);

      for (let datas in this.thirdHeadArray) { // for objects in data array
        let m = this.content[value.head]; //array of head eg: manufacturer
        for (let n in this.content[value.head]) // loop for array of head eg:manufacturer
        {
          let d = this.thirdHeadArray[datas].specs[value.head];//content value of head in data array
          let cont = m[n];//value of content in head array
          if (cont == d) {
            let a = this.thirdHeadArray[datas];
            console.log("before push",newArray)
            newArray.push(a)
            console.log("pushing",newArray)
            var unique = newArray.filter(function(elem, index, self) {
              return index == self.indexOf(elem);
            })
            this.dont = unique;
            console.log(this.dont);
          }
        }
      }
      this.thirdHeadArray=this.dont;
    }
*/







  //   filtermanu(){
  //       if(this.content['manufacturer'].length==0){
  //         this.newdata = this.data;
  //       console.log("if part");
  //       }
  //       else{
  //         for (let datas in this.data) { // for objects in data array
  //           let m = this.content['manufacturer']; //array of head eg: manufacturer
  //           for (let n in this.content['manufacturer']) // loop for array of head eg:manufacturer
  //           {
  //             let d = this.data[datas].specs['manufacturer'];//content value of head in data array
  //             let cont = m[n];//value of content in head array
  //             // console.log(cont,d);
  //             if (cont == d) {
  //
  //               let a = this.data[datas];
  //                     this.newdata.push(a);
  //                     // console.log(this.newdata);
  //               // newArray.push(a);
  //               // console.log(newArray, "fgrfd")
  //               this.newdata = this.newdata.filter(function(elem, index, self) {
  //                 return index == self.indexOf(elem);
  //               })
  //               // this.dont = unique;
  //
  //             }
  //           }
  //         }
  //
  //       }
  //       console.log(this.newdata);
  //       this.filterStorage();
  //   }
  // filterStorage(){
  //   console.log(this.newdata);
  //   let arrayStorage= new Array();
  //   console.log(this.newdata,"dsfdsfds");
  //   console.log(this.content['storage'].length);
  //   if(this.content['storage'].length>0){
  // console.log("in if ");
  //     // this.newdata = this.dont;
  //   // }
  //   // else{
  //     for (let datas in this.newdata) { // for objects in data array
  //       let m = this.content['storage']; //array of head eg: manufacturer
  //       for (let n in this.content['storage']) // loop for array of head eg:manufacturer
  //       {
  //         let d = this.newdata[datas].specs['storage'];//content value of head in data array
  //         let cont = m[n];//value of content in head array
  //         console.log(cont,d);
  //         if (cont == d) {
  //           let a = this.newdata[datas];
  //                 // this.newdata.push(a);
  //           arrayStorage.push(a);
  //           console.log(arrayStorage);
  //            arrayStorage= arrayStorage.filter(function(elem, index, self) {
  //             return index == self.indexOf(elem);
  //           })
  //
  //
  //         }
  //       }
  //     }
  //   this.newdata =arrayStorage;
  //   }
  //   this.filterOS();
  // }
  // filterOS(){
  //   // if(this.content['storage'].length==0){
  //   //   return this.data;
  //   // }
  //   // else{
  //   //
  //   // }
  //   console.log(this.newdata);
  //
  // }



  // for (let datas in this.newdata) { // for objects in data array
  //   let m = this.content[value.head]; //array of head eg: manufacturer
  //   for (let n in this.content[value.head]) // loop for array of head eg:manufacturer
  //   {
  //     let d = this.newdata[datas].specs[value.head];//content value of head in data array
  //     let cont = m[n];//value of content in head array
  //     if (cont == d) {
  //       let a = this.newdata[datas];
  //       newArray.push(a)
  //       console.log(newArray)
  //       var unique = newArray.filter(function(elem, index, self) {
  //         return index == self.indexOf(elem);
  //       })
  //       this.dont = unique;
  //     }
  //   }
  // }

  // this.newdata = [];
