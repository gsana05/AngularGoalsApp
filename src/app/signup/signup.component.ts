import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService, private router:Router, public zone: NgZone) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        if(user.uid != null){
        //this.router.navigate(['dashboard']);
        this.zone.run(() => { this.router.navigate(['/dashboard']); });
        }
      }
    })
  }


  Email : String

  password : String

  async SignUpUser(){
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
     const authLogIn = await this.authService.signUpUser(this.Email.toString(), this.password.toString());
     window.alert(authLogIn);
   }
   catch(error){
    window.alert(error); 
   }
  
  }

  gotToLogIn(){
    this.router.navigate(['/login']);
    //this.zone.run(() => { this.router.navigate(['/login']); });
  }

}
