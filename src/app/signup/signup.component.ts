import { Component, OnInit } from '@angular/core';
import { Http,Request,Response,RequestMethod} from '@angular/http';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {RouterModule, Routes,Router} from '@angular/router';
import { AppService } from '../app.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
   providers: [AppService]

})
// export class SignupComponent implements OnInit{
//
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//
// }
//

//
export class SignupComponent implements OnInit {
regForm: FormGroup;
 posts: any = [];

   constructor(private _formBuilder:FormBuilder,public http: Http, private router: Router,private postsService: AppService) { }
   ngOnInit(){

     this.regForm=this._formBuilder.group({
      uname:[" ",[Validators.required]],
      phoneNo:[" ",[Validators.required]],
      uemail:[" ",[Validators.required]],
      upassword:["",[Validators.required]],

     })


   }




onSubmit(){
console.log("asfFDSFD");
console.log(this.regForm.value);

// this.http.post('/signUp', this.regForm.value).subscribe(
//     (res: any) => {
//         // this.load = false;
//         let data = res.json();
//         if (data.data == "User already exist!") {
//             alert(data.data);
//         }
//         else {
//             this.router.navigate(['/login']);
//         }
//     })
//
//
// }
 this.postsService.register(this.regForm.value).subscribe(posts => {

   this.posts=posts.json();
   console.log(this.posts.status);
   if(this.posts.status)  {
     this.router.navigate(['/signin']);

   }
   else{
       this.router.navigate(['/sigup']);
   }

     });
}


}
