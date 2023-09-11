import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TransactionDetails } from 'src/app/model/transactionDetails';
import { TransactionDetailsServiceService } from 'src/app/services/transaction-details-service.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent {

  addForm!: FormGroup;
  updateForm!: FormGroup;


  titleName: string = "TransactionDetails";

  //object
  addObject = new TransactionDetails;
  editObj = new TransactionDetails;


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
  constructor(private  transactionDetailsService:TransactionDetailsServiceService) {
    this.createForm();
    this.createUpdateForm();
    this.getAllRecord()
  }


  createForm() {
    this.addForm = new FormGroup({
      'srNo': new FormControl('', Validators.required),
      'custId': new FormControl('', [Validators.required]),
      'invNo': new FormControl('', Validators.required),
      'invDate': new FormControl('', Validators.required),
      'prBal': new FormControl('', Validators.required),
      'trBal': new FormControl('', Validators.required),
      'num1': new FormControl('', Validators.required),
      'num2': new FormControl('', Validators.required),
      'char1': new FormControl('', Validators.required),
      'char2': new FormControl('', Validators.required),
      'tranType': new FormControl('', Validators.required),
      'forBillNo': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required),
      
    })

  }
  
  
  createUpdateForm() {
    this.updateForm = new FormGroup({
      'srNo': new FormControl('', Validators.required),
      'custId': new FormControl('', [Validators.required]),
      'invNo': new FormControl('', Validators.required),
      'invDate': new FormControl('', Validators.required),
      'prBal': new FormControl('', Validators.required),
      'trBal': new FormControl('', Validators.required),
      'num1': new FormControl('', Validators.required),
      'num2': new FormControl('', Validators.required),
      'char1': new FormControl('', Validators.required),
      'char2': new FormControl('', Validators.required),
      'tranType': new FormControl('', Validators.required),
      'forBillNo': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required),
      
    })

  }

  onSubmit(addForm:NgForm) {
    this.addObject = new TransactionDetails;
    this.submitted = true;
    this.addObject.srNo = this.addForm.value.srNo;
    this.addObject.custId = this.addForm.value.custId;
    this.addObject.invNo = this.addForm.value.invNo;
	    this.addObject.invDate = this.addForm.value.invDate;

    this.addObject.prBal = this.addForm.value.prBal;
    this.addObject.trBal = this.addForm.value.trBal;
    this.addObject.ttlBal = this.addForm.value.ttlBal;
    this.addObject.num1 = this.addForm.value.num1;
    this.addObject.num2 = this.addForm.value.num2;
    this.addObject.char1 = this.addForm.value.char1;
    this.addObject.char2 = this.addForm.value.char2;
    this.addObject.tranType = this.addForm.value.tranType;
    this.addObject.forBillNo = this.addForm.value.forBillNo;
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
    return this.transactionDetailsService.getTransactionDetails().subscribe(res => {
      console.log(res);
      this.getAllArray = res;

    })

  }
  post(transaction:TransactionDetails) {
    return this.transactionDetailsService.postTransactionDetails(transaction).subscribe(res => {
      console.log(res);

    })
  }

  edit(q:TransactionDetails) {
    this.addObject = q;
  }

  update() {
    this.transactionDetailsService.updateTransactionDetails(this.addObject).subscribe(res => {
      console.log(res);
    })
    this.toggleTable();

  }

}




