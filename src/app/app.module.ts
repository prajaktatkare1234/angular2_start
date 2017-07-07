import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';


const appRoutes : Routes = [
    { path : '' , component : SigninComponent },
    { path : 'signup' , component : SignupComponent },
    { path : 'signin' , component : SigninComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true})

  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
