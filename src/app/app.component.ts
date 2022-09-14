import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: number = 0;

  constructor(private messageService: MessageService, private router: Router) {

  }

  ngOnInit() {

    this.router.events.subscribe((url: any) => {
      if (url.url) {
        // @ts-ignore
        this.url = url.url.trim();

        // @ts-ignore
        switch (this.url) {
          case '0': {
            this.activeIndex = 0;
            break;
          }
          case '/recipe': {
            this.activeIndex = 0;
            break;
          }
          case '/payment': {
            this.activeIndex = 1;
            console.log('her');
            break;
          }
          case '/user': {
            this.activeIndex = 2;
            break;
          }
          case '/summary': {
            this.activeIndex = 3;
            break;
          }
          default: {
            this.activeIndex = 0;
          }
        }
      }
    });


    this.items = [
      {
        label: 'Upload receipt',
        command: () => {
          this.activeIndex = 0;
          this.messageService.add({
            severity: 'info',
            summary: 'Upload receipt image',
            detail: 'Please upload the photo in high quality',
          });
          this.router.navigate(['/recipe']);
        },
      },
      {
        label: 'Fill form',
        command: () => {
          this.activeIndex = 1;
          this.messageService.add({
            severity: 'info',
            summary: 'Enter the information',
            detail: 'Enter numbers in US dollars',
          });
          this.router.navigate(['/payment']);
        },
      },
      {
        label: 'Select user',
        command: () => {
          this.activeIndex = 2;
          this.messageService.add({
            severity: 'info',
            summary: 'Specify the user',
            detail: 'Specify the payer',
          });
          this.router.navigate(['/user']);
        },
      },
      {
        label: 'Summary',
        command: () => {
          this.activeIndex = 3;
          this.messageService.add({
            severity: 'info',
            summary: 'Final review',
            detail: 'Make sure everything is correct',
          });
          this.router.navigate(['/summary']);
        },
      },
    ];
  }
}
