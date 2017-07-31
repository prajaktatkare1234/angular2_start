import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
// import {ImageCropperComponent} from 'ng2-img-cropper';
import { LyResizingCroppingImageModule } from 'angular2-resizing-cropping-image';

import { ModalModule } from 'ng2-modal';





import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterPipe } from './filter.pipe';
import { MobileComponent } from './mobile/mobile.component';
import { CartComponent } from './cart/cart.component';
import { ModalComponent } from './modal/modal.component';
import { ImageComponent } from './image/image.component';



const appRoutes : Routes = [
    { path : '' , component : SigninComponent },
      { path : 'cart' , component :  CartComponent },
    { path : 'mobile' , component : MobileComponent },
    { path : 'home' , component : HomeComponent },
    { path : 'signup' , component : SignupComponent },
    { path : 'signin' , component : SigninComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavigationbarComponent,
    SidebarComponent,
    FilterPipe,
    MobileComponent,
    CartComponent,
    ModalComponent,
    ImageComponent,





  ],
  imports: [
    BrowserModule,
    ModalModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    HttpModule,
    // ImageCropperComponent,
   LyResizingCroppingImageModule,



    RouterModule.forRoot(appRoutes, { useHash: true})

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
