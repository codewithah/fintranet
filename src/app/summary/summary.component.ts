import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../transaction.service";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";
import {User} from '../user/user.interface';
import { Payment } from '../payment/payment.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  image: any = '';
  // @ts-ignore
  user: User;
  // @ts-ignore
  payment: Payment;

  constructor(private transactionService: TransactionService, private router: Router, private usersService: UserService) {
  }

  ngOnInit(): void {
    this.image = this.transactionService.getImage();
    this.payment = this.transactionService.getPayment();
    this.user = this.transactionService.getUser();
  }

  onPrev(){
    this.router.navigate(['/payment']);
  }


}
