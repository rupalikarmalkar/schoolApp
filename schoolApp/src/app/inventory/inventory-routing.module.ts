import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { BookingRegistorComponent } from './booking-registor/booking-registor.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { QuotationMasterComponent } from './quotation-master/quotation-master.component';
import { SalesMasterComponent } from './sales-master/sales-master.component';
import { SalesTransactionComponent } from './sales-transaction/sales-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
     {path:'',component:InventoryComponent,
     children:[ 
    { path:'booking-registor', component:BookingRegistorComponent}, 
    { path:'customer-details',  component:CustomerDetailsComponent},
    { path:'item-master',  component:ItemMasterComponent},
    {path:'quotation-master',component:QuotationMasterComponent},
    {path:'sales-master',component:SalesMasterComponent},
    {path:'sales-transaction',component:SalesTransactionComponent},
    {path:'transaction-details',component:TransactionDetailsComponent}]
    },
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
