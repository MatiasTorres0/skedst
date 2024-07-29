import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async registerUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  async logoutUser(): Promise<void> {
    try {
      return await this.afAuth.signOut();
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }

  async getUser(): Promise<User | null> {
    try {
      return (await this.afAuth.currentUser) as User | null;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  async loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      return await this.afAuth.signInWithPopup(provider);
    } catch (error) {
      console.error('Error during Google login:', error);
      throw error;
    }
  }
}
