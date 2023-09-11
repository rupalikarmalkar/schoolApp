import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SalesTransaction } from 'src/app/model/salesTransaction';
import { SalesTransactionServiceService } from 'src/app/services/sales-transaction-service.service';

@Component({
  selector: 'app-sales-transaction',
  templateUrl: './sales-transaction.component.html',
  styleUrls: ['./sales-transaction.component.css']
})
export class SalesTransactionComponent {


  addForm!: FormGroup;
  updateForm!: FormGroup;


  titleName: string = "SalesTransaction";

  //object
  addObject = new SalesTransaction;
  editObj = new SalesTransaction;


  //array
  array: any = [];
  updateArray: any = [];
  getAllArray: any = [];


  //boolean properties
  submitted: boolean = false;
  FormHide = false;
  LogHide = true;
  AddBtn = true;
  UpdateFormHide = false;
  titleHide = true;

  titleToggle() {
    this.titleHide = !this.titleHide;
  }

  toggleAddBtn() {
    this.LogHide = false;
    this.UpdateFormHide = false;
    this.AddBtn = false;
    this.FormHide = true;
  }

  toggleTable() {
    this.LogHide = !this.LogHide;
    this.UpdateFormHide = false;
    this.AddBtn = true;
    this.FormHide = false;
     this.getAllRecord();
  }

  updateFormToggle() {
    this.UpdateFormHide = !this.UpdateFormHide;
    this.FormHide = false;
    this.LogHide = false;
    this.AddBtn = false;
  }
  constructor(private salesTransactionService: SalesTransactionServiceService) {
    this.createForm();
    this.createUpdateForm();
     this.getAllRecord()
  }

createForm() {
    this.addForm = new FormGroup({
      'invoiceId': new FormControl('', Validators.required),
      'invoiceDate': new FormControl('', Validators.required),
      'cousterCode': new FormControl('', Validators.required),
      'total': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required),
})
}

 createUpdateForm() {
    this.updateForm = new FormGroup({
      'invoiceId': new FormControl('', Validators.required),
      'invoiceDate': new FormControl('', Validators.required),
      'cousterCode': new FormControl('', Validators.required),
      'total': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required),

    })
  }

  onSubmit(addForm: NgForm) {
    this.addObject = new SalesTransaction;
    this.submitted = true;
    this.addObject.invoiceId = this.addForm.value.invoiceId;
    this.addObject.invoiceDate = this.addForm.value.invoiceDate;
    this.addObject.cousterCode = this.addForm.value.cousterCode;
    this.addObject.total = this.addForm.value.total;
    this.addObject.userId = this.addForm.value.userId;
    this.addObject.brId = this.addForm.value.brId;
    this.addObject.orgId = this.addForm.value.orgId;
    this.array.push(this.addObject);

    this.post(this.addObject);
    // this.addForm.reset();
    this.toggleTable();
    this.titleToggle();
   }

getAllRecord() {
    return this.salesTransactionService.getSalesTransaction().subscribe(res => {
      console.log(res);
      this.getAllArray = res;
 })
 }

  post(transaction:SalesTransaction) {
    return this.salesTransactionService.postSalesTransaction(transaction).subscribe(res => {
      console.log(res);
    })
  }

  edit(q:SalesTransaction) {
    this.addObject = q;
    console.log(this.addObject);
    
  }

  update() {
    this.salesTransactionService.updateSalesTransaction(this.addObject).subscribe(res => {
      console.log(res);
    })
    this.toggleTable();

  }

}










