import {Injectable} from '@angular/core';
import {Payment} from "./payment/payment.interface";
import {User} from "./user/user.interface";
import {SafeUrl} from '@angular/platform-browser';

@Injectable()

export class TransactionService {

  // @ts-ignore
  url: SafeUrl;

  // @ts-ignore

  payment: Payment;

  // @ts-ignore
  user: User;

  constructor() {
  }

  addImage(image: any) {

    const blob = (image._files[0]);

    const reader = new window.FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      // @ts-ignore
      const base64data: string = reader.result;

      localStorage.setItem("recipe", base64data);
    }

  }

  removeImage() {
    localStorage.removeItem('recipe')
  };


  getImage() {
    return localStorage.getItem('recipe');
  }

  addPayment(payment: Payment) {
    this.payment = payment;
  }

  getPayment() {
    return this.payment;
  }

  addUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

}
