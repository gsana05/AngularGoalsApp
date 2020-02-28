import { Injectable } from '@angular/core';
//import * as firebase from 'firebase/app';
import {environment} from "../environments/environment"
import { collectionData } from 'rxfire/firestore';
import { authState } from 'rxfire/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private test : AngularFireAuth) { }

  //app = firebase.initializeApp(environment.firebaseConfig);

  async signUpUser(email : string, password : string) : Promise<string> {
    const auth = await this.test.auth.createUserWithEmailAndPassword(email, password);
    return auth.user.uid; 
  }

  async LogInUser(email : string, password : string) : Promise<string> {
    const auth = await this.test.auth.signInWithEmailAndPassword(email, password);
    return auth.user.uid; 
  }

  LogOutUser(){
    const signout = this.test.auth.signOut();
  }

  //test = collectionData(this.app.firestore().collection('astronauts'));


}
