import { Component, OnInit } from '@angular/core';
import { Http,Request,Response,RequestMethod} from '@angular/http';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {RouterModule, Routes,Router} from '@angular/router';
import { SignupService } from '../signup.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
   providers: [SignupService]

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
   constructor(private _formBuilder:FormBuilder,public http: Http, private router: Router,private postsService: SignupService) { }
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
 this.postsService.getAllPosts(this.regForm.value).subscribe(posts => {

       this.posts = posts;
          console.log("done");
     });
}


}
