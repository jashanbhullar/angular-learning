import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user: User;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => this.user = user);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
