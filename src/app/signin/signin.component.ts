import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes,Router} from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
   providers: [AppService]
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
 posts: any = [];
  constructor(private postsService: AppService,private router:Router) { }
  userForm=new FormGroup({
    email:new FormControl(" ",Validators.required),

    password:new FormControl("",Validators.required)
  });

  // data={};


onSubmit(){

  console.log(this.userForm.value);
  this.postsService.login(this.userForm.value).subscribe(posts => {
    // console.log(posts.json());
    this.posts=posts.json();
    console.log(this.posts);
      let mobile = JSON.stringify(this.posts.data);

    if(this.posts.result.success)  {
        localStorage.setItem('mobile',mobile);


        this.router.navigate(['/home']);


    }
    else{
      this.router.navigate(['/signin']);
    }



      });
 }

}

// }
