import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {MdSidenav} from '@angular2-material/sidenav';
import { Cookie } from 'ng2-cookies';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterPipe } from './filter.pipe';
import { MobileComponent } from './mobile/mobile.component';



const appRoutes : Routes = [
    { path : '' , component : SigninComponent },
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
    MdSidenav,
    FilterPipe,
    MobileComponent,
    // Cookie

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true})

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
