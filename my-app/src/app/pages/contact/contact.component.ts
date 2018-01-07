import {Component} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';

@Component({

selector:'contact',
templateUrl:'./contact.component.html'

})

export class ContactComponent{
form;

constructor(private formBuilder : FormBuilder){

};

ngOnInit(){
  this.form = this.formBuilder.group({

    name: this.formBuilder.control('', Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+'), Validators.required])),
    email: this.formBuilder.control('', Validators.compose([Validators.required])),
    phone: this.formBuilder.control('', Validators.compose([Validators.required])),
    message: this.formBuilder.control('', Validators.compose([Validators.required]))
  });
}

onSubmit(contact){
  console.log(contact)
}
}
