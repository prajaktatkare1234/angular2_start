import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
// export class SigninComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//
// }
export class SigninComponent {
  userForm=new FormGroup({
    email:new FormControl(" ",Validators.required),
    password:new FormControl("",Validators.required)
  });

  // data={};


onSubmit(){

  console.log(this.userForm.value);
}

}
