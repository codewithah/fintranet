import { Injectable } from '@angular/core';
import {User} from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];

  constructor() {
    this.users = [
      {firstname: 'James', lastname: 'Atkins'},
      {firstname: 'Mary', lastname: 'Baker'},
      {firstname: 'John', lastname: 'Barnes'},
      {firstname: 'Patricia', lastname: 'Campbell'},
      {firstname: 'Robert', lastname: 'Collins'},
    ]
  }

  getUsers(){
    return this.users;
  }

}
