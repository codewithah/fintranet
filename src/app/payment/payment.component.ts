import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Status} from "./status.interface";
import {TransactionService} from "../transaction.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {

  amount: number = 0;

  source: string = '';

  statuses: Status[] = [];

  selectedStatus: Status;

  currentDate: Date = new Date();

  next5Days = 3600 * 1000 * 24 * 5;

  // @ts-ignore
  maxDate: Date = new Date((Date.parse(this.currentDate)) + this.next5Days);


  constructor(private transactionService: TransactionService, private router: Router) {

    this.statuses = [
      {name: 'Green', code: 'A'},
      {name: 'Yellow', code: 'B'},
      {name: 'Orange', code: 'C'},
      {name: 'Red', code: 'D'},
    ];

    this.selectedStatus = this.statuses[0];
  }

  onNext() {
    const payment = {
      amount: this.amount,
      date: this.currentDate,
      status: this.selectedStatus,
      source: this.source
    }
    this.transactionService.addPayment(payment);
    this.router.navigate(['/user']);
  }

  onPrev() {
    this.router.navigate(['/recipe']);
  }

  ngOnInit(): void {
    const payment = this.transactionService.getPayment();
    if (payment) {
      this.amount = payment.amount;
      this.currentDate = payment.date;
      this.selectedStatus = payment.status;
      this.source = payment.source;
    }

  }
}

