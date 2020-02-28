import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService : AuthService, private router:Router, public zone: NgZone) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log("dashboard ng on it")
        //this.zone.run(() => { this.router.navigate(['/login']); });
      }
      else{
        console.log("dashboard ng on it testing")
        this.zone.run(() => { this.router.navigate(['/login']); });
        //this.router.navigate(['login']);
      }
    })
  }

  async LogOutUser(){
    console.log("sign out pressed")
    await this.authService.LogOutUser();
  }

}
