import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

//THIS CONTROLS THE MOBILE MENU OPENING AND CLOSING
this.$ = jQuery;
$(document).ready(()=>{
$('#menubars').click(function(){
$('#mobileNavContainer').fadeIn(200);
$('#mobileNavContainer li').click(function(){
$('#mobileNavContainer').fadeOut(200);
});
//THIS CONTROLS THE MOBILE MENU OPENING AND CLOSING

}
}
}
