import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
