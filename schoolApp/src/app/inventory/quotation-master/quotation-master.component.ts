import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { QuotationMaster } from 'src/app/model/quotationMaster';
import { QuotationMasterServiceService } from 'src/app/services/quotation-master-service.service';

@Component({
  selector: 'app-quotation-master',
  templateUrl: './quotation-master.component.html',
  styleUrls: ['./quotation-master.component.css']
})
export class QuotationMasterComponent {
  quotationForm!: FormGroup;
  updateQuotationForm!: FormGroup;


  titleName: string = "ItemMaster";

  //object
  quotationObject = new QuotationMaster;
  editObj = new QuotationMaster;


  //array
  array: any = [];
  updateArray: any = [];
  getQuotationArray: any = [];


  //boolean properties
  submitted: boolean = false;
  quotationFormHide = false;
  quotationLogHide = true;
  quotationAddBtn = true;
  quotationUpdateFormHide = false;
  titleHide = true;

  titleToggle() {
    this.titleHide = !this.titleHide;
  }

  toggleAddBtn() {
    this.quotationLogHide = false;
    this.quotationUpdateFormHide = false;
    this.quotationAddBtn = false;
    this.quotationFormHide = true;
  }

  toggleTable() {
    this.quotationLogHide = !this.quotationLogHide;
    this.quotationUpdateFormHide = false;
    this.quotationAddBtn = true;
    this.quotationFormHide = false;
    this.getAllQuotation();
  }

  updateFormToggle() {
    this.quotationUpdateFormHide = !this.quotationUpdateFormHide;
    this.quotationFormHide = false;
    this.quotationLogHide = false;
    this.quotationAddBtn = false;
  }
  constructor(private quotationMasterService: QuotationMasterServiceService) {
    this.createForm();
    this.createUpdateForm();
    this.getAllQuotation()
  }


  createForm() {
    this.quotationForm = new FormGroup({
      'quotationNumber': new FormControl('', Validators.required),
      'quotationDate': new FormControl('', [Validators.required]),
      'partyCode': new FormControl('', Validators.required),
      'partyName': new FormControl('', Validators.required),
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
      'schme': new FormControl('', Validators.required),
      'cgst': new FormControl('', Validators.required),
      'sgst': new FormControl('', Validators.required),
      'cgstPer': new FormControl('', Validators.required),
      'sgstPer': new FormControl('', Validators.required),
      'igst': new FormControl('', Validators.required),
      'igstPer': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)
    })

  }

  createUpdateForm() {
    this.updateQuotationForm = new FormGroup({
      'quotationNumber': new FormControl('', Validators.required),
      'quotationDate': new FormControl('', [Validators.required]),
      'partyCode': new FormControl('', Validators.required),
      'partyName': new FormControl('', Validators.required),
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
      'schme': new FormControl('', Validators.required),
      'cgst': new FormControl('', Validators.required),
      'sgst': new FormControl('', Validators.required),
      'cgstPer': new FormControl('', Validators.required),
      'sgstPer': new FormControl('', Validators.required),
      'igst': new FormControl('', Validators.required),
      'igstPer': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)

    })

  }


  onSubmit(quotationForm: NgForm) {
    this.quotationObject = new QuotationMaster;
    this.submitted = true;
    this.quotationObject.quotationNumber = this.quotationForm.value.quotationNumber;
    this.quotationObject.quotationDate = this.quotationForm.value.quotationDate;
    this.quotationObject.partyCode = this.quotationForm.value.partyCode;
    this.quotationObject.partyName = this.quotationForm.value.partyName;
    this.quotationObject.itemCode = this.quotationForm.value.itemCode;
    this.quotationObject.itemName = this.quotationForm.value.itemName;
    this.quotationObject.partiCulars = this.quotationForm.value.partiCulars;
    this.quotationObject.rate = this.quotationForm.value.rate;
    this.quotationObject.quantity = this.quotationForm.value.quantity;
    this.quotationObject.discount = this.quotationForm.value.discount;
    this.quotationObject.vat = this.quotationForm.value.vat;
    this.quotationObject.amount = this.quotationForm.value.amount;
    this.quotationObject.total = this.quotationForm.value.total;
    this.quotationObject.frightCharges = this.quotationForm.value.frightCharges;
    this.quotationObject.grandTotal = this.quotationForm.value.grandTotal;
    this.quotationObject.mrp = this.quotationForm.value.mrp;
    this.quotationObject.schme = this.quotationForm.value.schme;
    this.quotationObject.cgst = this.quotationForm.value.cgst;
    this.quotationObject.sgst = this.quotationForm.value.sgst;
    this.quotationObject.cgstPer = this.quotationForm.value.cgstPer;
    this.quotationObject.sgstPer = this.quotationForm.value.sgstPer;
    this.quotationObject.igst = this.quotationForm.value.igst;
    this.quotationObject.igstPer = this.quotationForm.value.igstPer;
    this.quotationObject.userId = this.quotationForm.value.userId;
    this.quotationObject.brId = this.quotationForm.value.brId;
    this.quotationObject.orgId = this.quotationForm.value.orgId;
    this.array.push(this.quotationObject);

    this.postOnQuotation(this.quotationObject);
    // this.quotationForm.reset();
    this.toggleTable();
    this.titleToggle();

  }

  getAllQuotation() {
    return this.quotationMasterService.getQuotation().subscribe(res => {
      console.log(res);
      this.getQuotationArray = res;
      // console.log(this.getQuotationArray);

    })
  }
  postOnQuotation(quotation: QuotationMaster) {
    return this.quotationMasterService.postQuotation(quotation).subscribe(res => {
      console.log(res);

    })
  }

  edit(q: QuotationMaster) {
    this.quotationObject = q;
  }

  updateQuotation() {
    this.quotationMasterService.updateQuotation(this.quotationObject).subscribe(res => {
      console.log(res);
    })
    this.toggleTable();

  }

}
