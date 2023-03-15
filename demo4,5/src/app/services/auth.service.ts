import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser | undefined;
  constructor() { }
  login(usernamee: string, passwordd: string) {
    this.currentUser = {
      username: usernamee,
      password: passwordd,
    };
  
}

  get isLoggedIn(): boolean {
    if (this.currentUser?.username && this.currentUser?.password) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.currentUser = undefined;
  }
}
