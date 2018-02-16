import {Component, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({

selector:'portfolio',
templateUrl:'./portfolio.component.html'

})

export class PortfolioComponent {

  prices: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  this.prices = db.collection('pricing').valueChanges();
  }

  ngOnInit(){

  }

  // private itemDoc: AngularFirestoreDocument<Item>;
  // item: Observable<Item>;
  //   constructor(private afs: AngularFirestore) {
  //   this.itemDoc = afs.doc<Item>('portfolio/design_portfolio');
  //   this.item = this.itemDoc.valueChanges();
  // }//end constructor
  //
  // update(item: Item) {
  //   this.itemDoc.update(item);
  // }
  //
  // ngOnInit() {
  //
  // }
}//end class
