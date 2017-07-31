import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
    import { ToastsManager,ToastOptions} from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  data: any;
  predata;

  public cartArray = new Array();
  constructor(private router: Router,private toastr:ToastsManager,vcr: ViewContainerRef,private toptions:ToastOptions) {
  this.toastr.setRootViewContainerRef(vcr);
  this.toptions.animate=null;
  this.toptions.toastLife=5000;


}

  ngOnInit() {
    if (!localStorage.getItem('mobile')) {

      this.router.navigate(['/signin']);
    }
    this.data = JSON.parse(localStorage.getItem('buy'));

  }
  addtoCart(cartdata) {

    if (localStorage.getItem('cart')) {
      this.predata = JSON.parse(localStorage.getItem('cart'));
      this.cartArray = this.predata;
      for (let i in this.cartArray) {
        if (this.cartArray[i].id == cartdata.id) {
          // alert("already added to cart");
          this.toastr.error('Already added to cart.');

          return;
        }
      }
      this.cartArray.push(cartdata);
      this.toastr.success('Added to cart.');
      let cart = JSON.stringify(this.cartArray);
      localStorage.setItem('cart', cart);
    }
    else {
      this.cartArray.push(cartdata);
      console.log(this.cartArray);
      this.toastr.success('Added to cart.');
      let cart = JSON.stringify(this.cartArray);
      localStorage.setItem('cart', cart);

    }


  window.location.reload();
  }



}
