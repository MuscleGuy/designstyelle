import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.css']
})
export class PortfolioItemsComponent implements OnInit {

  items : Item[];

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
    })
  }

}
