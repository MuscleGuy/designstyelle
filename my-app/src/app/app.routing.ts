import {Routes, RouterModule} from '@angular/router';
import {SolutionsComponent} from './solutions.component';
import {HowItWorksComponent} from './how-it-works.component';
import {HomePageComponent} from './home-page.component';
import {PortfolioComponent} from './portfolio.component';
import {ContactComponent} from './contact.component';
import {MarketingComponent} from './marketing.component';

const appRoutes: Routes = [
{path:'how-it-works', component:HowItWorksComponent},
{path:'solutions', component:SolutionsComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'marketing', component:MarketingComponent},
{path:'contact', component:ContactComponent},
{path:'', component:HomePageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
