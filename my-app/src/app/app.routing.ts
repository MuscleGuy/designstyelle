import {Routes, RouterModule} from '@angular/router';
import {SolutionsComponent} from './solutions.component';
import {HowItWorksComponent} from './how-it-works.component';
import {HomePageComponent} from './home-page.component';
import {PortfolioComponent} from './portfolio.component';
import {ContactComponent} from './contact.component';

const appRoutes: Routes = [
{path:'solutions', component:SolutionsComponent},
{path:'how-it-works', component:HowItWorksComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'contact', component:ContactComponent},
{path:'', component:HomePageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
