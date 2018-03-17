import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/homePage/home-page.component';
import {HowItWorksComponent} from './pages/howItWorks/how-it-works.component';
import {SolutionsComponent} from './pages/solutions/solutions.component';
import {PortfolioComponent} from './pages//portfolio/portfolio.component';
import {ContactComponent} from './pages/contact/contact.component';
import {MarketingComponent} from './pages/marketing/marketing.component';
import {ProductComponent} from './pages/product/product.component';
import {DevelopmentComponent} from './pages/development/development.component';
import {BrandingComponent} from './pages/branding/branding.component';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {MembersComponent} from './pages/members/members.component';

const appRoutes: Routes = [
{path:'members', component:MembersComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent},
{path:'branding', component:BrandingComponent},
{path:'development', component:DevelopmentComponent},
{path:'product', component:ProductComponent},
{path:'marketing', component:MarketingComponent},
{path:'contact', component:ContactComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'solutions', component:SolutionsComponent},
{path:'how-it-works', component:HowItWorksComponent},
{path:'home-page', component:HomePageComponent},
{path:'', pathMatch:'full', redirectTo:'home-page'}
];

export const routing = RouterModule.forRoot(appRoutes);
