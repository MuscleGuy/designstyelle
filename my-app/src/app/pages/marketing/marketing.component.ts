import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({

selector:'marketing',
templateUrl:'./marketing.component.html'
})

export class MarketingComponent{

  prices: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  this.prices = db.collection('pricing').valueChanges();
  }

  ngOnInit(){

  }


}
