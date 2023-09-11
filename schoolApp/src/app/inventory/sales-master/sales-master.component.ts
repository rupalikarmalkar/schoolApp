import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SalesMaster } from 'src/app/model/salesMaster';
import { SalesMasterServiceService } from 'src/app/services/sales-master-service.service';

@Component({
  selector: 'app-sales-master',
  templateUrl: './sales-master.component.html',
  styleUrls: ['./sales-master.component.css']
})
export class SalesMasterComponent {
  addForm!: FormGroup;
  updateForm!: FormGroup;


  titleName: string = "SalesMaster";

  //object
  addObject = new SalesMaster;
  editObj = new SalesMaster;


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
  constructor(private salesMasterService:SalesMasterServiceService) {
    this.createForm();
    this.createUpdateForm();
    this.getAllRecord()
  }


  createForm() {
    this.addForm = new FormGroup({
      'invoiceNumber': new FormControl('', Validators.required),
      'invoiceDate': new FormControl('', [Validators.required]),
      'partyCode': new FormControl('', Validators.required),
      'itemCode': new FormControl('', Validators.required),
      'itemName': new FormControl('', Validators.required),
      'partiCulars': new FormControl('', Validators.required),
      'rate': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'discount': new FormControl('', Validators.required),
      'vat': new FormControl('', Validators.required),
      'amount': new FormControl('', Validators.required),
      'total': new FormControl('', Validators.required),
      'grandTotal': new FormControl('', Validators.required),
      'frightCharges': new FormControl('', Validators.required),
      'mrp': new FormControl('', Validators.required),
      'scheme': new FormControl('', Validators.required),
      'cgst': new FormControl('', Validators.required),
      'sgst': new FormControl('', Validators.required),
      'cgstPer': new FormControl('', Validators.required),
      'sgstPer': new FormControl('', Validators.required),
      'igst': new FormControl('', Validators.required),
      'igstPer': new FormControl('', Validators.required),
      'dcn': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)
    })

  }

  createUpdateForm() {
    this.updateForm = new FormGroup({
      'invoiceNumber': new FormControl('', Validators.required),
      'invoiceDate': new FormControl('', [Validators.required]),
      'partyCode': new FormControl('', Validators.required),
      'itemCode': new FormControl('', Validators.required),
      'itemName': new FormControl('', Validators.required),
      'partiCulars': new FormControl('', Validators.required),
      'rate': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'discount': new FormControl('', Validators.required),
      'vat': new FormControl('', Validators.required),
      'amount': new FormControl('', Validators.required),
      'total': new FormControl('', Validators.required),
      'grandTotal': new FormControl('', Validators.required),
      'frightCharges': new FormControl('', Validators.required),
      'mrp': new FormControl('', Validators.required),
      'scheme': new FormControl('', Validators.required),
      'cgst': new FormControl('', Validators.required),
      'sgst': new FormControl('', Validators.required),
      'cgstPer': new FormControl('', Validators.required),
      'sgstPer': new FormControl('', Validators.required),
      'igst': new FormControl('', Validators.required),
      'igstPer': new FormControl('', Validators.required),
      'dcn': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)

    })

  }


  onSubmit(addForm: NgForm) {
    this.addObject = new SalesMaster;
    this.submitted = true;
    this.addObject.invoiceNumber = this.addForm.value.quotationNumber;
    this.addObject.invoiceDate = this.addForm.value.quotationDate;
    this.addObject.partyCode = this.addForm.value.partyCode;
    // this.addObject.partyName = this.addForm.value.partyName;
    this.addObject.itemCode = this.addForm.value.itemCode;
    this.addObject.itemName = this.addForm.value.itemName;
    this.addObject.partiCulars = this.addForm.value.partiCulars;
    this.addObject.rate = this.addForm.value.rate;
    this.addObject.quantity = this.addForm.value.quantity;
    this.addObject.discount = this.addForm.value.discount;
    this.addObject.vat = this.addForm.value.vat;
    this.addObject.amount = this.addForm.value.amount;
    this.addObject.total = this.addForm.value.total;
    this.addObject.frightCharges = this.addForm.value.frightCharges;
    this.addObject.grandTotal = this.addForm.value.grandTotal;
    this.addObject.mrp = this.addForm.value.mrp;
    this.addObject.scheme = this.addForm.value.scheme;   // string data types
    this.addObject.cgst = this.addForm.value.cgst;
    this.addObject.sgst = this.addForm.value.sgst;
    this.addObject.cgstPer = this.addForm.value.cgstPer;
    this.addObject.sgstPer = this.addForm.value.sgstPer;
    this.addObject.igst = this.addForm.value.igst;
    this.addObject.igstPer = this.addForm.value.igstPer;
    this.addObject.dcn=this.addForm.value.dcn;
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
    return this.salesMasterService.getSales().subscribe(res => {
      console.log(res);
      this.getAllArray = res;

    })

  }
  post(sales:SalesMaster) {
    return this.salesMasterService.postSales(sales).subscribe(res => {
      console.log(res);

    })
  }

  edit(q:SalesMaster) {
    this.addObject = q;
  }

  update() {
    this.salesMasterService.updateSales(this.addObject).subscribe(res => {
      console.log(res);
    })
    this.toggleTable();

  }

}


