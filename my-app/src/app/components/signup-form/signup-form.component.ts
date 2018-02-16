import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  moduleId: module.id,
  // directives: []

})
export class SignupFormComponent implements OnInit {
  "use strict";
  form;
  showSignupForm = true;
  showConfirmationMessage = false;

  constructor(private formBuilder : FormBuilder, private db: AngularFirestore){};

  ngOnInit(){
    this.form = this.formBuilder.group({

      first_name: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),
      last_name: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),
      email: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      initial_consultation_date: this.formBuilder.control(''),
      initial_consultation_time: this.formBuilder.control(''),
      // package: this.formBuilder.control('', Validators.compose([Validators.required])),
      permissions: 0,
      // client_url: this.formBuilder.control('', Validators.compose([Validators.required])),
      user_name: this.formBuilder.control(''),
      user_password: this.formBuilder.control(''),
      verify_password: this.formBuilder.control(''),
      // account_id: "",
      user_id: "null",
      do_not_contact: "false",
      do_not_email: "false",
      do_not_send_letter: "false",
      do_not_sms: "false",
      last_updated: "null",
      open_ticket: "false",
    });
    this.showSignupForm = true;
    this.showConfirmationMessage = false;
  }

  hideForm(){this.showSignupForm = false;}
  showConfirmation() {this.showConfirmationMessage = true;}

  onSubmit(contact){
    "use strict";

    nullValues => {}

    var payload = {};

    var sendDocID, setMath;
    setMath = Math.floor(Math.random() * 213);

    sendDocID = contact.user_name + 'ID' + setMath;

    var user_id;
    user_id = contact.user_name + contact.phone;

    payload = {
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      phone: contact.phone,
      initial_consultation_date: contact.initial_consultation_date,
      initial_consultation_time: contact.initial_consultation_time,
      // package: contact.package,
      // products: contact.products,
      permissions:  0,
      // client_url: contact.client_url,
      user_name: contact.user_name,
      user_password: contact.user_password,
      verify_password: contact.verify_password,
      // verify_password: contact.verify_password,
      user_id: user_id,
      do_not_contact: "false",
      do_not_email: "false",
      do_not_send_letter: "false",
      do_not_sms: "null",
      last_updated: contact.last_updated,
      open_ticket: "null",
    }
    this.db.collection("signup").doc(sendDocID).set(payload)
    .then(function() {
        console.log("Signup submitted successfully");
    })
    .catch(function(error) {
        console.error("ERROR - Signup was not submitted: ", error);
    });

  this.hideForm();
  this.showConfirmation();

  }
  }
