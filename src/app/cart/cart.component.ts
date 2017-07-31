import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ToastsManager,ToastOptions} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartproducts;
sum:number=0;
  constructor(private toastr:ToastsManager,vcr: ViewContainerRef,private toptions:ToastOptions) {
  this.toastr.setRootViewContainerRef(vcr);
  this.toptions.animate=null;
  this.toptions.toastLife=5000; }

  ngOnInit() {
    this.cartproducts=JSON.parse(localStorage.getItem('cart'));

    for(let product  in this.cartproducts){

      this.sum=this.sum +this.cartproducts[product].price;

    }
    console.log(this.sum)
  }
  remove(cart){

    var data=this.cartproducts.indexOf(cart);
    this.cartproducts.splice(data,1);
    this.toastr.success('Removed from cart');
    let updated = JSON.stringify(this.cartproducts);
    localStorage.setItem('cart', updated);
    this.sum=this.sum-cart.price;
    window.location.reload();






}
}
