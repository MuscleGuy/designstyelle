import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
selector:'contact',
templateUrl:'./contact.component.html'
})

export class ContactComponent{

form;

showContactForm = true;
showConfirmationMessage = false;

constructor(private formBuilder : FormBuilder, private db: AngularFirestore){};

ngOnInit(){
  this.form = this.formBuilder.group({

    name: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),
    email: this.formBuilder.control('', Validators.compose([Validators.required])),
    phone: this.formBuilder.control('', Validators.compose([Validators.required])),
    message: this.formBuilder.control('', Validators.compose([Validators.required]))
  });
  this.showContactForm = true;
  this.showConfirmationMessage = false;
}

hideForm(){this.showContactForm = false;}
showConfirmation() {this.showConfirmationMessage = true;}

onSubmit(contact){
  "use strict";

  var payload = {};
  var currentTime = new Date();
  var sendTime;
  sendTime = currentTime.toString();

  payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    message: contact.message
  }

  this.db.collection("contact_form").doc(sendTime).set(payload)
  .then(function() {
      console.log("Contact Form submitted successfully");
  })
  .catch(function(error) {
      console.error("ERROR - Contact Form was not submitted: ", error);
  });

this.hideForm();
this.showConfirmation();

}
}
