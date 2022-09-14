import { Component, OnInit } from '@angular/core';
import {User} from "./user.interface";
import {UserService} from "./user.service";
import {TransactionService} from "../transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // @ts-ignore
  selectedUser:  User = null;

  users : User[] = []

  message:string =  '';

  constructor(private transactionService: TransactionService, private  router:Router, private  usersService: UserService) {
    this.users = usersService.getUsers();
  }
  ngOnInit(): void {
    const user = this.transactionService.getUser();
    if(user){
      this.selectedUser = user;
      this.updateMessage();
    }
  }


  onSelectUser(index: number) {
    this.selectedUser = this.users[index];
    this.transactionService.addUser(this.selectedUser);
    this.updateMessage();
  }

  updateMessage(){
    this.message = `${this.selectedUser['firstname']} ${this.selectedUser['lastname']} has been selected.`;
  }

  onNext(){
    this.transactionService.addUser(this.selectedUser);
    this.router.navigate(['/summary']);
  }

  onPrev(){
    this.router.navigate(['/payment']);
  }
}
