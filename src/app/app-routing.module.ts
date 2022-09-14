import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReceiptComponent} from "./receipt/receipt.component";
import {PaymentComponent} from "./payment/payment.component";
import {UserComponent} from "./user/user.component";
import {SummaryComponent} from "./summary/summary.component";

const routes: Routes = [
  { path: '', component: ReceiptComponent,  pathMatch: 'full' } ,
  { path: 'recipe', component: ReceiptComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'user', component: UserComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', component: ReceiptComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
