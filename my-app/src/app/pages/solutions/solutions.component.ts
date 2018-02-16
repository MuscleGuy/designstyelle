import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({

selector:'solutions',
templateUrl:'./solutions.component.html'

})

export class SolutionsComponent{

title = "Solutions";
subtitle = "More Than Just A Design Agency";

prices: Observable<any[]>;
constructor(private db: AngularFirestore) {
this.prices = db.collection('pricing').valueChanges();
}

ngOnInit(){

}

}
