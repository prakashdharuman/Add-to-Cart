import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Item } from './item';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsUrl = 'https://api.myjson.com/bins/qhnfp';
  orderSummary: Item[] = [];
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    public messageService: MessageService
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getOrderCount(): number {
    return this.orderSummary.reduce((count:number, order:Item) => count + order.quantity, 0)
  }
  
  getTotalPrice(): number {
    return this.orderSummary.reduce((price:number, order:Item) => price + order.price * order.quantity, 0)
  }

  getDiscountPrice(): number {
    return this.orderSummary.reduce((price:number, order:Item) => price + (order.price - order.price * order.discount/100) * order.quantity, 0)
  }

  addItem(item: Item): void {
    let id = this.orderSummary.findIndex(order=>order.id == item.id)
    this.messageService.add(item.name + " is added to cart");
    if(id === -1) {
      item.quantity = 1;
      this.orderSummary.push(item);
    } else {
      this.increaseQuantity(id);    
    }
  }

  removeItem(id: number): void {
    this.messageService.add(this.orderSummary[id].name + " is removed from cart");
    this.orderSummary.splice(id, 1);
  }

  increaseQuantity(id: number): void {
    this.orderSummary[id].quantity += 1;
  }

  decreaseQuantity(id: number): void {
    this.orderSummary[id].quantity -= 1;
    if(this.orderSummary[id].quantity == 0) {
      this.removeItem(id);
    }
  }
}
