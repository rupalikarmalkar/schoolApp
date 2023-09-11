import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { QuotationMasterComponent } from './quotation-master/quotation-master.component';
import { SalesMasterComponent } from './sales-master/sales-master.component';
import { SalesTransactionComponent } from './sales-transaction/sales-transaction.component';
import { BookingRegistorComponent } from './booking-registor/booking-registor.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InventoryComponent,
    CustomerDetailsComponent,
    TransactionDetailsComponent,
    QuotationMasterComponent,
    ItemMasterComponent,
    SalesMasterComponent,
    BookingRegistorComponent,
    SalesTransactionComponent
  
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class InventoryModule { }
