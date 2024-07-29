import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private auth: AngularFireAuth) {}

  async login(event: Event) {
    event.preventDefault();
    try {
      await this.auth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Login successful');
    } catch (error) {
      console.error('Error logging in', error);
    }
  }

  async register(event: Event) {
    event.preventDefault();
    try {
      await this.auth.createUserWithEmailAndPassword(this.email, this.password);
      console.log('Registration successful');
    } catch (error) {
      console.error('Error registering', error);
    }
  }

  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.auth.signInWithPopup(provider);
      console.log('Google login successful', result);
    } catch (error) {
      console.error('Error logging in with Google', error);
    }
  }
}
