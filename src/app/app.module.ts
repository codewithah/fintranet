import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from "primeng/checkbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {InputNumberModule} from "primeng/inputnumber";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {FileUploadModule} from 'primeng/fileupload';
import { UserComponent } from './user/user.component';
import {TableModule} from "primeng/table";
import {MessageModule} from "primeng/message";
import { SummaryComponent } from './summary/summary.component';
import {CardModule} from "primeng/card";
import {TransactionService} from "./transaction.service";


@NgModule({
  declarations: [AppComponent, PaymentComponent, ReceiptComponent, UserComponent, SummaryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StepsModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    RippleModule,
    InputNumberModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    TableModule,
    MessageModule,
    CardModule,
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
