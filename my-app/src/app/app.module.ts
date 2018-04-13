import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ReactiveFormsModule } from '@angular/forms';
import { TopHeaderComponent } from './top-header.component';
import { AppFooterBlockComponent } from './app-footer-block.component';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { HowItWorksComponent } from './pages/howItWorks/how-it-works.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { PortfolioComponent } from './pages//portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ProductComponent } from './pages/product/product.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { BrandingComponent } from './pages/branding/branding.component';
import { SignupComponent } from './pages/signup/signup.component';

import {routing} from './app.routing';
import { PortfolioItemsComponent } from './components/portfolio-items/portfolio-items.component';

import { PortfolioService } from './services/portfolio.service';
import { LoginService } from './services/login.service';

import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MembersComponent } from './pages/members/members.component';

var config = {
firebase: {
  apiKey: "AIzaSyBdhdvR5fkWfDkeI0jtRW56ILu5H3NH1NQ",
  authDomain: "designstyelle-api.firebaseapp.com",
  databaseURL: "https://designstyelle-api.firebaseio.com",
  projectId: "designstyelle-api",
  storageBucket: "",
  messagingSenderId: "26338801886"
}}

@NgModule({
  declarations: [
    AppComponent,SolutionsComponent,HowItWorksComponent,HomePageComponent,SignupComponent,ContactComponent,PortfolioComponent,MarketingComponent,BrandingComponent,DevelopmentComponent,ProductComponent,TopHeaderComponent,AppFooterBlockComponent, PortfolioItemsComponent, SignupFormComponent, MembersComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(config.firebase, 'my-app'), AngularFirestoreModule, AngularFireAuthModule, routing, ReactiveFormsModule
  ],
  providers: [PortfolioService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
