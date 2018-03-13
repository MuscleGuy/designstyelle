import {Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


declare var $:any;


@Component({

selector:'top-header',
templateUrl:'./top-header.component.html'

})

export class TopHeaderComponent{

constructor(private router: Router) { }

menubars(){
$('#mobileNavContainer').fadeToggle(100);
}

mobileNavClicked(){
$('#mobileNavContainer').hide();

this.router.events.subscribe((evt) => {
    if (!(evt instanceof NavigationEnd)) {
        return;
    }
    window.scrollTo(0, 0)
});

}

}
