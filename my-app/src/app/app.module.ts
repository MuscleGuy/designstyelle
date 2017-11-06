import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopHeaderComponent} from './top-header.component';
import {AppFooterBlockComponent} from './app-footer-block.component';
import {SolutionsComponent} from './solutions.component';
import {HowItWorksComponent} from './how-it-works.component';
import {HomePageComponent} from './home-page.component';
import {PortfolioComponent} from './portfolio.component';
import {ContactComponent} from './contact.component';

import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,TopHeaderComponent,AppFooterBlockComponent,SolutionsComponent,HowItWorksComponent,HomePageComponent,ContactComponent,PortfolioComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
