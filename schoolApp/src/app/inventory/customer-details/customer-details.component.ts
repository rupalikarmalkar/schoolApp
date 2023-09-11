import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerDetails } from 'src/app/model/customerDetails';
import { CustomerDetailsServiceService } from 'src/app/services/customer-details-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  addForm!: FormGroup;
  updateForm!: FormGroup;


  titleName: string = "CustomerDetails";

  //object
  addObject = new CustomerDetails;
  editObj = new CustomerDetails;


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
  constructor(private customerDetailsService:CustomerDetailsServiceService) {
     this.createForm();
     this.createUpdateForm();
     this.getAllRecord()
  }
  createForm() {
    this.addForm = new FormGroup({
      'cutID': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'area': new FormControl('', [Validators.required]),
      'city': new FormControl('', Validators.required),
      'phoneNo': new FormControl('', Validators.required),
      'balance': new FormControl('', Validators.required),
      'adress': new FormControl('', Validators.required),
      'n1': new FormControl('', Validators.required),
      'n2': new FormControl('', Validators.required),
      't1': new FormControl('', Validators.required),
      't2': new FormControl('', Validators.required),
      'disc': new FormControl('', Validators.required),
      'gstno': new FormControl('', Validators.required),
      'OtherSt': new FormControl('', Validators.required),
     'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)
    })
  }
    createUpdateForm() {
      this.updateForm = new FormGroup({
        'cutID': new FormControl('', Validators.required),
        'name': new FormControl('', Validators.required),
        'area': new FormControl('', [Validators.required]),
        'city': new FormControl('', Validators.required),
        'phoneNo': new FormControl('', Validators.required),
        'balance': new FormControl('', Validators.required),
        'adress': new FormControl('', Validators.required),
        'n1': new FormControl('', Validators.required),
        'n2': new FormControl('', Validators.required),
        't1': new FormControl('', Validators.required),
        't2': new FormControl('', Validators.required),
        'disc': new FormControl('', Validators.required),
        'gstno': new FormControl('', Validators.required),
        'OtherSt': new FormControl('', Validators.required),
       'userId': new FormControl('', Validators.required),
        'brId': new FormControl('', Validators.required),
        'orgId': new FormControl('', Validators.required)
      })
    }

    
  onSubmit(addForm: NgForm) {
    this.addObject = new CustomerDetails;
    this.submitted = true;
    this.addObject.cutID = this.addForm.value.cutID;
    this.addObject.name = this.addForm.value.name;
    this.addObject.area = this.addForm.value.area;
     this.addObject.city = this.addForm.value.city;
    this.addObject.phoneNo = this.addForm.value.phoneNo;
    this.addObject.balance = this.addForm.value.balance;
    this.addObject.adress = this.addForm.value.adress;
    this.addObject.n1 = this.addForm.value.n1;
    this.addObject.n2 = this.addForm.value.n2;
    this.addObject.t1 = this.addForm.value.t1;
    this.addObject.t2 = this.addForm.value.t2;
    this.addObject.disc = this.addForm.value.disc;
    this.addObject.gstno = this.addForm.value.gstno;
      this.addObject.OtherSt = this.addForm.value.OtherSt;

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
    return this.customerDetailsService.getCustomer().subscribe(res => {
      console.log(res);
      this.getAllArray = res;

    })

  }
  post(customer:CustomerDetails) {
    return this.customerDetailsService.postCustomer(customer).subscribe(res => {
      console.log(res);

    })
  }

  edit(q:CustomerDetails) {
    this.addObject = q;
  }

  update() {
    this.customerDetailsService.updateCustomer(this.addObject).subscribe(res => {
      console.log(res);
    })
    this.toggleTable();

  }

}



    
  

 

