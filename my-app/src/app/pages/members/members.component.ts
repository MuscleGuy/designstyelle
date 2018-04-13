import { Component, OnInit} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  moduleId: module.id,
  providers: [LoginService]
})

export class MembersComponent implements OnInit {
  "use strict";
  form;

  showLoginForm: boolean = true;
  showConfirmationMessage: boolean = false;
  getUserMeta(): Observable<[any]>;
  isUserLoggedIn(): Observable<[any]>;
  memberLogout(): Observable<[any]>;
  onSubmit(): Observable<[any]>;

  constructor(public formBuilder: FormBuilder, public db: AngularFirestore, public afAuth: AngularFireAuth, public loginSvc: LoginService) {}


  getUserMeta(){
    this.afAuth.auth.onAuthStateChanged(function(user) {

      var fb_displayName, fb_email, fb_emailVerified, fb_photoURL, fb_isAnonymous, fb_uid, fb_providerData;

      if (user != null) {
        this.fb_displayName = user.displayName;
        this.fb_email = user.email;
        this.fb_emailVerified = user.emailVerified;
        this.fb_photoURL = user.photoURL;
        this.fb_isAnonymous = user.isAnonymous;
        this.fb_uid = user.uid;
        this.fb_providerData = user.providerData;
      } else {
        console.log('User Not Logged In');
    }
    })
}

  isUserLoggedIn(){
    if(this.afAuth.auth.currentUser) {
      return true;
  } else {
      return false;
  }
  }

  memberLogout(){
  this.loginSvc.logout();
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),
      password: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),
    });
    this.getUserMeta();
  }

  onSubmit(contact){
    this.email = contact.email;
    this.password = contact.password;

    this.loginSvc.login(this.email,this.password);
    this.isUserLoggedIn()
}

  }
