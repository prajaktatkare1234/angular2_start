import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router';
import { ToastsManager,ToastOptions} from 'ng2-toastr/ng2-toastr';
import {ModalModule,RouteModal} from "ng2-modal"



@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
//  template: `<div class="row">
// <button (click)="firstModal.open()">modal </button>
// <modal #firstModal>
//     <modal-header>
//         <h1>I am first modal</h1>
//     </modal-header>
//     <modal-content>
//         This modal has its own header, content and footer.
//     </modal-content>
//     <modal-footer>
//         <button class="btn btn-primary" (click)="firstModal.close()">okay!</button>
//     </modal-footer>
// </modal>
// </div>`,
  styleUrls: ['./navigationbar.component.css'],
  providers:[AppService]
})
export class NavigationbarComponent implements OnInit {
cartproducts;
product;
  constructor(public appservice:AppService,private router:Router,) { }

  ngOnInit() {
    this.cartproducts=JSON.parse(localStorage.getItem('cart'));
    this.product=this.cartproducts.length;
    console.log(this.product);


  }
  clicked()
  {


  let data={data:"data"};

  localStorage.removeItem('mobile');
  this.router.navigate(['/signin']);


}
cart(){
  this.router.navigate(['/cart']);

}
home(){
  this.router.navigate(['/home']);
}
a(){
  console.log("asdsadaS")
}


}
