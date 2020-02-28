import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { of, Observable } from 'rxjs'; 
import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { interval, zip, fromEvent } from 'rxjs'; 
import { map, filter, tap, debounceTime } from 'rxjs/operators'; 
import * as firebase from 'firebase';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private authService : AuthService, private router:Router, public zone: NgZone) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        if(user.uid != null){
        //this.router.navigate(['dashboard']);
        //this.zone.run(() => { this.router.navigate(['/dashboard']); });
        }
      }
    })
  }

  Email : String
  password : String

  async logInUser(){
    if(this.Email != undefined){
       console.log("hello " + this.Email.toString()); 
    }
    else{
      console.log("hello please enter email"); 
      return
    }

    if(this.password != undefined){
      if(this.password.length >= 6){
        console.log("hello " + this.password.toString());
      }
      else{
        console.log("Password must be 6 or more characters"); 
      }
      
   }
   else{
     console.log("hello please enter a password"); 
     return
   }

   try{
     const authLogIn = await this.authService.LogInUser(this.Email.toString(), this.password.toString());
     window.alert(authLogIn);
   }
   catch(error){
    window.alert(error); 
   }
  
  }

goToSignUp(){
  //this.router.navigate(['/signup']);
  this.zone.run(() => { this.router.navigate(['/signup']); });
}
  
  

}
