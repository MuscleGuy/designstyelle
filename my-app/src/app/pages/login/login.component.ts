import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})

export class LoginComponent implements OnInit {
  "use strict";
  form;



  showLoginForm = true;
  showConfirmationMessage = false;

  // constructor(private formBuilder : FormBuilder, private db: AngularFirestore){};

  constructor(public formBuilder: FormBuilder, public db: AngularFirestore, public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function() {
      location.href = '/members';
      console.log('logged in');
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit(){
    this.form = this.formBuilder.group({

      user_name: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),
      password: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),

    });
    this.showLoginForm = true;
    this.showConfirmationMessage = false;
  }

  hideForm(){this.showLoginForm = false;}
  showConfirmation() {this.showConfirmationMessage = true;}

  onSubmit(contact){
    "use strict";

    var payload = {};

    payload = {
      user_name: contact.user_name,
      password: contact.password,

    }
    this.db.collection("signup").doc('').set(payload)
    .then(function() {
        console.log("Logged in Successfully");
    })
    .catch(function(error) {
        console.error("ERROR - Not able to login: ", error);
    });

  this.hideForm();
  this.showConfirmation();

  }
  }
