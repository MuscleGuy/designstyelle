import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TopHeaderComponent} from './top-header.component';
import {AppFooterBlockComponent} from './app-footer-block.component';
import {HomePageComponent} from './pages/homePage/home-page.component';
import {HowItWorksComponent} from './pages/howItWorks/how-it-works.component';
import {SolutionsComponent} from './pages/solutions/solutions.component';
import {PortfolioComponent} from './pages//portfolio/portfolio.component';
import {ContactComponent} from './pages/contact/contact.component';
import {MarketingComponent} from './pages/marketing/marketing.component';
import {ProductComponent} from './pages/product/product.component';
import {DevelopmentComponent} from './pages/development/development.component';
import {BrandingComponent} from './pages/branding/branding.component';
import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,SolutionsComponent,HowItWorksComponent,HomePageComponent,ContactComponent,PortfolioComponent,MarketingComponent,BrandingComponent,DevelopmentComponent,ProductComponent,TopHeaderComponent,AppFooterBlockComponent
  ],
  imports: [
    BrowserModule,routing,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
