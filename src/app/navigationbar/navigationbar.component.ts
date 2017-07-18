import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css'],
  providers:[AppService]
})
export class NavigationbarComponent implements OnInit {

  constructor(public appservice:AppService,private router:Router) { }

  ngOnInit() {
  }
  clicked()
  {

  console.log("dsjfkdlsjf");
  let data={data:"data"};
    // this.appservice.logout(data).subscribe(posts => {

      // this.posts=posts.json();
      // console.log(this.posts.status);
    // })
  localStorage.removeItem('mobile');
  this.router.navigate(['/signin']);


}

}
