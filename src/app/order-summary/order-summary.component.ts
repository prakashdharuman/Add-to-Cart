import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.sass']
})
export class OrderSummaryComponent implements OnInit {

  constructor(
    public itemsService: ItemsService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.messageService.clear();
  }
}
