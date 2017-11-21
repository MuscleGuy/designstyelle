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
import {MarketingComponent} from './marketing.component';
import {ProductComponent} from './product.component';
import {DevelopmentComponent} from './development.component';
import {BrandingComponent} from './branding.component';

import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,SolutionsComponent,HowItWorksComponent,HomePageComponent,ContactComponent,PortfolioComponent,MarketingComponent,BrandingComponent,DevelopmentComponent,ProductComponent,TopHeaderComponent,AppFooterBlockComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
