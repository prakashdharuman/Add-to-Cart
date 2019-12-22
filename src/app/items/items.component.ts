import { Component, OnInit } from '@angular/core';
import { Item  } from '../item';
import { ItemsService } from '../items.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(
    public itemsService: ItemsService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe(items=>this.items=items, error=>this.messageService.add(error.message));
  }

  ngOnDestroy() {
    this.messageService.clear();
  }
}
