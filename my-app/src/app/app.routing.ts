import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {HowItWorksComponent} from './how-it-works.component';
import {SolutionsComponent} from './solutions.component';
import {PortfolioComponent} from './portfolio.component';
import {ContactComponent} from './contact.component';
import {MarketingComponent} from './marketing.component';
import {ProductComponent} from './product.component';
import {DevelopmentComponent} from './development.component';
import {BrandingComponent} from './branding.component';


const appRoutes: Routes = [
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
