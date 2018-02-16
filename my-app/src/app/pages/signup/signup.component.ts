import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({

selector:'signup',
templateUrl:'signup.component.html'

})

export class SignupComponent{

  prices: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  this.prices = db.collection('pricing').valueChanges();
  }

  ngOnInit(){

  }



}
