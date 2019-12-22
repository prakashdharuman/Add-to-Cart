import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path: '', redirectTo:'items', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent},
  {path: 'orderSummary', component: OrderSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
