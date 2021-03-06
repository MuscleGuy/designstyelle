import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({

selector:'product',
templateUrl:'product.component.html'

})

export class ProductComponent{
  prices: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  this.prices = db.collection('pricing').valueChanges();
  }

  ngOnInit(){

  }
}
