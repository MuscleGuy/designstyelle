import {Component, OnInit, AfterViewChecked} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/Item';

// import { PortfolioItemsComponent } from '../../components/portfolio-items/portfolio-items.component';
import { PortfolioService } from '../../services/portfolio.service';

@Component({

selector:'portfolio',
templateUrl:'./portfolio.component.html',
providers:[PortfolioService]

})

export class PortfolioComponent implements OnInit{

  items : Item[];
  prices: Observable<any[]>;

  constructor(private db: AngularFirestore, public portfolioService: PortfolioService) {
  this.prices = db.collection('pricing').valueChanges();
  }

ngOnInit(){

this.portfolioService.getItems().subscribe(items => {
  this.items = items;
  // console.log(items);
});

}

ngAfterViewChecked() {
}


}//end class
