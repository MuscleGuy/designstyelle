import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({

selector:'development',
templateUrl:'development.component.html'

})

export class DevelopmentComponent{

  prices: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  this.prices = db.collection('pricing').valueChanges();
  }

  ngOnInit(){

  }
  
}
