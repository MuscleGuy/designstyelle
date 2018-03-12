import {Component} from '@angular/core';

declare var $:any;


@Component({

selector:'top-header',
templateUrl:'./top-header.component.html'

})

export class TopHeaderComponent{

menubars(){
$('#mobileNavContainer').fadeToggle(100);
}

mobileNavClicked(){
$('#mobileNavContainer').hide();
}

}
