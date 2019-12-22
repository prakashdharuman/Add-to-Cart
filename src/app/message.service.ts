import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string
  timeout: any
  constructor() { }

  add(message: string): void {
    this.message = message;
    this.timer();
  }

  timer(): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(()=>this.message=null, 3000);
  }

  clear(): void {
    this.message = null;
  }
}
