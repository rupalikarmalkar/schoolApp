import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BookingRegistor } from 'src/app/model/bookingRregistor';
import { BookingRegistorServiceService } from 'src/app/services/booking-registor-service.service';

@Component({
  selector: 'app-booking-registor',
  templateUrl: './booking-registor.component.html',
  styleUrls: ['./booking-registor.component.css']
})
export class BookingRegistorComponent {

  addForm!: FormGroup;
  updateForm!: FormGroup;


  titleName: string = "BookingRegistor";

  //object
  addObject = new BookingRegistor;
  editObj = new BookingRegistor;


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
  constructor(private bookingService:BookingRegistorServiceService) {
    this.createForm();
    this.createUpdateForm();
    this.getAllRecord();
  }

    createForm() {
    this.addForm = new FormGroup({
      'custNo': new FormControl('', Validators.required),
      'name': new FormControl('', [Validators.required]),
      'addres': new FormControl('', Validators.required),
      'mNo': new FormControl('', Validators.required),
      'Item_code': new FormControl('', Validators.required),
      'itemName': new FormControl('', Validators.required),
      'iRate': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'rAmount': new FormControl('', Validators.required),
      'pAmount': new FormControl('', Validators.required),
      'total': new FormControl('', Validators.required),
      'bDate': new FormControl('', Validators.required),
      'dDate': new FormControl('', Validators.required),
      'dTime': new FormControl('', Validators.required),
      'itemDetails': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brid': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)
    })

  }


   createUpdateForm() {
     this.updateForm = new FormGroup({
    'custNo': new FormControl('', Validators.required),
    'name': new FormControl('', [Validators.required]),
    'addres': new FormControl('', Validators.required),
    'mNo': new FormControl('', Validators.required),
    'Item_code': new FormControl('', Validators.required),
    'itemName': new FormControl('', Validators.required),
    'iRate': new FormControl('', Validators.required),
    'quantity': new FormControl('', Validators.required),
    'rAmount': new FormControl('', Validators.required),
    'pAmount': new FormControl('', Validators.required),
    'total': new FormControl('', Validators.required),
    'bDate': new FormControl('', Validators.required),
    'dDate': new FormControl('', Validators.required),
    'dTime': new FormControl('', Validators.required),
    'itemDetails': new FormControl('', Validators.required),
     'userId': new FormControl('', Validators.required),
    'brid': new FormControl('', Validators.required),
    'orgId': new FormControl('', Validators.required)
    })

   }


   onSubmit(addForm: NgForm) {
    this.addObject = new BookingRegistor;
     this.submitted = true;
    this.addObject.name = this.addForm.value.name;
    this.addObject.addres = this.addForm.value.addres;
    this.addObject.mNo = this.addForm.value.mNo;
    this.addObject.Item_code = this.addForm.value.Item_code;
    this.addObject.itemName = this.addForm.value.itemName;
    this.addObject.iRate = this.addForm.value.iRate;
    this.addObject.quantity = this.addForm.value.quantity;
    this.addObject.rAmount = this.addForm.value.rAmount;
    this.addObject.pAmount = this.addForm.value.pAmount;
    this.addObject.bDate = this.addForm.value.bDate;
    this.addObject.dDate = this.addForm.value.dDate;
    this.addObject.dTime = this.addForm.value.dTime;
    this.addObject.total = this.addForm.value.total;
    this.addObject.itemDetails = this.addForm.value.itemDetails;
    this.addObject.userId = this.addForm.value.userId;
    this.addObject.brid = this.addForm.value.brid;
    this.addObject.orgId = this.addForm.value.orgId;
    this.array.push(this.addObject);

    this.post(this.addObject);
    // this.addForm.reset();
    this.toggleTable();
    this.titleToggle();

  }

  getAllRecord() {
    return this.bookingService.getBooking().subscribe(res => {
      console.log(res);
      this.getAllArray = res;

    })

  }
  post(booking:BookingRegistor) {
    return this.bookingService.postBooking(booking).subscribe(res => {
      console.log(res);

    })
  }

  edit(q:BookingRegistor) {
    this.addObject = q;
  }

  update() {
    this.bookingService.updateBooking(this.addObject).subscribe(res => {
      console.log(res);
    })
    this.toggleTable();

  }


}
