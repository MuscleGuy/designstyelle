import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';



@Injectable()
export class LoginService {

  constructor(public afAuth: AngularFireAuth) {}

  login(email,password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .catch(function(error){
              this.errorCode = error.code;
              this.errorMessage = error.message;
          });
  }

    logout() {
      this.afAuth.auth.signOut();
    }


}
