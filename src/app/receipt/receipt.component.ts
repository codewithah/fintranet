import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {TransactionService} from "../transaction.service";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  // @ts-ignore
  @ViewChild('imageRef', {static: false}) imageRef: any;
  image: string = '';

  disabled: boolean = true;

  constructor(private transactionService: TransactionService, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.image = this.transactionService.getImage();
    if (this.image) {
      this.disabled = false;
    }
  }

  onAddImage() {
    this.transactionService.addImage(this.imageRef);
    // @ts-ignore
    this.image = this.transactionService.getImage();
    this.disabled = false;
  }

  onNext() {
    this.router.navigate(['/payment']);
  }

  onRemoveImage() {
    this.transactionService.removeImage();
    // @ts-ignore
    this.image = this.transactionService.getImage();
    this.disabled = true;
  }
}
