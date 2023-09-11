import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ItemMaster } from 'src/app/model/itemMaster';
import { ItemMasterServiceService } from 'src/app/services/item-master-service.service';



@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent {
  // searchName:string="ItemMaster"
  titleName: string = "ItemMaster";
  //form group
  itemForm!: FormGroup;
  updateItemForm!: FormGroup;
  //object
  itemObject = new ItemMaster;
  editObj = new ItemMaster;


  //array
  array: any = [];
  getItemArray: any = [];
  updateArray: any = [];

  //boolean properties
  submitted: boolean = false;
  itemFormHide = false;
  itemLogHide = true;
  itemAddBtn = true;
  itemUpdateFormHide = false;
  titleHide = true;

  titleToggle() {
    this.titleHide = !this.titleHide;
  }

  toggleAddBtn() {
    this.itemLogHide = false;
    this.itemUpdateFormHide = false;
    this.itemAddBtn = false;
    this.itemFormHide = true;
  }

  toggleTable() {
    this.itemLogHide = !this.itemLogHide;
    this.itemUpdateFormHide = false;
    this.itemAddBtn = true;
    this.itemFormHide = false;
    this.getAllItem();
  }

  updateFormToggle() {
    this.itemUpdateFormHide = !this.itemUpdateFormHide;
    this.itemFormHide = false;
    this.itemLogHide = false;
    this.itemAddBtn = false;
  }
  constructor(private itemMasterService: ItemMasterServiceService) {
    this.createForm();
    this.createUpdateForm();
    this.getAllItem();
  }

  createForm() {
    this.itemForm = new FormGroup({
      'itemCode': new FormControl('', Validators.required),
      'name': new FormControl('', [Validators.required]),
      'unit': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'rate': new FormControl('', Validators.required),
      'd1': new FormControl('', Validators.required),
      'd2': new FormControl('', Validators.required),
      'itmType': new FormControl('', Validators.required),
      'shrtnm': new FormControl('', Validators.required),
      'cgst': new FormControl('', Validators.required),
      'sgst': new FormControl('', Validators.required),
      'igst': new FormControl('', Validators.required),
      'pRate': new FormControl('', Validators.required),
      'hsncode': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'categoryID': new FormControl('', Validators.required),
      'wrates': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)
    })

  }

  createUpdateForm() {
    this.updateItemForm = new FormGroup({
      'itemCode': new FormControl('', Validators.required),
      'name': new FormControl('', [Validators.required]),
      'unit': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'rate': new FormControl('', Validators.required),
      'd1': new FormControl('', Validators.required),
      'd2': new FormControl('', Validators.required),
      'itmType': new FormControl('', Validators.required),
      'shrtnm': new FormControl('', Validators.required),
      'cgst': new FormControl('', Validators.required),
      'sgst': new FormControl('', Validators.required),
      'igst': new FormControl('', Validators.required),
      'pRate': new FormControl('', Validators.required),
      'hsncode': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'categoryID': new FormControl('', Validators.required),
      'wrates': new FormControl('', Validators.required),
      'userId': new FormControl('', Validators.required),
      'brId': new FormControl('', Validators.required),
      'orgId': new FormControl('', Validators.required)
    })

  }


  onSubmit(itemForm: NgForm) {
    this.itemObject = new ItemMaster;
    this.submitted = true;
    //    this.itemObject.itemCode = this.itemForm.value.itemCode;
    this.itemObject.name = this.itemForm.value.name;
    this.itemObject.unit = this.itemForm.value.unit;
    this.itemObject.quantity = this.itemForm.value.quantity;
    this.itemObject.rate = this.itemForm.value.rate;
    this.itemObject.d1 = this.itemForm.value.d1;
    this.itemObject.d2 = this.itemForm.value.d2;
    this.itemObject.itmType = this.itemForm.value.itmType;
    this.itemObject.shrtnm = this.itemForm.value.shrtnm;
    this.itemObject.cgst = this.itemForm.value.cgst;
    this.itemObject.sgst = this.itemForm.value.sgst;
    this.itemObject.igst = this.itemForm.value.igst;
    this.itemObject.pRate = this.itemForm.value.pRate;
    this.itemObject.hsncode = this.itemForm.value.hsncode;
    this.itemObject.category = this.itemForm.value.category;
    this.itemObject.categoryID = this.itemForm.value.categoryID;
    this.itemObject.wrates = this.itemForm.value.wrates;
    this.itemObject.userId = this.itemForm.value.userId;
    this.itemObject.brId = this.itemForm.value.brId;
    this.itemObject.orgId = this.itemForm.value.orgId;
    this.array.push(this.itemObject);
    //console.log(this.array);

    this.postOnItem(this.itemObject);

    // console.log("Array data", this.array);
    // this.itemForm.reset();
    this.toggleTable();
    this.titleToggle();

  }

  getAllItem() {
    return this.itemMasterService.getItemMaster().subscribe(res => {
      this.getItemArray = res;
      console.log("get all");
      console.log(this.getItemArray);
    })
  }

  postOnItem(item: ItemMaster) {
    return this.itemMasterService.postItemMaster(item).subscribe(res => {
      console.log(res);
    })
  }
  onEdit(p: ItemMaster) {
    // console.log(p);

    this.itemObject.itemCode = p.itemCode;
    this.itemObject.unit = p.unit;
    this.itemObject.quantity = p.quantity;
    this.itemObject.rate = p.rate;
    this.itemObject.d1 = p.d1;
    this.itemObject.d2 = p.d2;
    this.itemObject.itmType = p.itmType;
    this.itemObject.shrtnm = p.shrtnm;
    this.itemObject.cgst = p.cgst;
    this.itemObject.sgst = p.sgst;
    this.itemObject.igst = p.igst;
    this.itemObject.pRate = p.pRate;
    this.itemObject.hsncode = p.hsncode;
    this.itemObject.category = p.category;
    this.itemObject.categoryID = p.categoryID;
    this.itemObject.wrates = p.wrates;
    this.itemObject.userId = p.userId;
    this.itemObject.brId = p.brId;
    this.itemObject.orgId = p.orgId;

    this.createUpdateForm();
    this.updateItemForm.controls['itemCode'].setValue(this.itemObject.itemCode);
    this.updateItemForm.controls['name'].setValue(this.itemObject.name);
    this.updateItemForm.controls['unit'].setValue(this.itemObject.unit);
    this.updateItemForm.controls['quantity'].setValue(this.itemObject.quantity);
    this.updateItemForm.controls['rate'].setValue(this.itemObject.rate);
    this.updateItemForm.controls['d1'].setValue(this.itemObject.d1);
    this.updateItemForm.controls['d2'].setValue(this.itemObject.d2);
    this.updateItemForm.controls['itmType'].setValue(this.itemObject.itmType);
    this.updateItemForm.controls['shrtnm'].setValue(this.itemObject.shrtnm);
    this.updateItemForm.controls['cgst'].setValue(this.itemObject.itmType);
    this.updateItemForm.controls['sgst'].setValue(this.itemObject.sgst);
    this.updateItemForm.controls['igst'].setValue(this.itemObject.igst);
    this.updateItemForm.controls['pRate'].setValue(this.itemObject.pRate);
    this.updateItemForm.controls['hsncode'].setValue(this.itemObject.hsncode);
    this.updateItemForm.controls['category'].setValue(this.itemObject.category);
    this.updateItemForm.controls['categoryID'].setValue(this.itemObject.categoryID);
    this.updateItemForm.controls['wrates'].setValue(this.itemObject.wrates);
    this.updateItemForm.controls['userId'].setValue(this.itemObject.userId);
    this.updateItemForm.controls['brId'].setValue(this.itemObject.brId);
    this.updateItemForm.controls['orgId'].setValue(this.itemObject.orgId);


  }
  updateItem(p: ItemMaster) {
    this.updateItemForm.controls['itemCode'].setValue(p.itemCode);
    this.updateItemForm.controls['name'].setValue(p.name);
    this.updateItemForm.controls['unit'].setValue(p.unit);
    this.updateItemForm.controls['quantity'].setValue(p.quantity);
    this.updateItemForm.controls['rate'].setValue(p.rate);
    this.updateItemForm.controls['d1'].setValue(p.d1);
    this.updateItemForm.controls['d2'].setValue(p.d2);
    this.updateItemForm.controls['itmType'].setValue(p.itmType);
    this.updateItemForm.controls['shrtnm'].setValue(p.shrtnm);
    this.updateItemForm.controls['cgst'].setValue(p.itmType);
    this.updateItemForm.controls['sgst'].setValue(p.sgst);
    this.updateItemForm.controls['igst'].setValue(p.igst);
    this.updateItemForm.controls['pRate'].setValue(p.pRate);
    this.updateItemForm.controls['hsncode'].setValue(p.hsncode);
    this.updateItemForm.controls['category'].setValue(p.category);
    this.updateItemForm.controls['categoryID'].setValue(p.categoryID);
    this.updateItemForm.controls['wrates'].setValue(p.wrates);
    this.updateItemForm.controls['userId'].setValue(p.userId);
    this.updateItemForm.controls['brId'].setValue(p.brId);
    this.updateItemForm.controls['orgId'].setValue(p.orgId);


    this.itemObject.itemCode = this.updateItemForm.value.itemCode;
    this.itemObject.name = this.updateItemForm.value.name;
    this.itemObject.unit = this.updateItemForm.value.unit;
    this.itemObject.quantity = this.updateItemForm.value.quantity;
    this.itemObject.rate = this.updateItemForm.value.rate;
    this.itemObject.d1 = this.updateItemForm.value.d1;
    this.itemObject.d2 = this.updateItemForm.value.d2;
    this.itemObject.itmType = this.updateItemForm.value.itmType;
    this.itemObject.shrtnm = this.updateItemForm.value.shrtnm;
    this.itemObject.cgst = this.updateItemForm.value.cgst;
    this.itemObject.igst = this.updateItemForm.value.igst;
    this.itemObject.pRate = this.updateItemForm.value.pRate;
    this.itemObject.hsncode = this.updateItemForm.value.hsncode;
    this.itemObject.category = this.updateItemForm.value.category;
    this.itemObject.categoryID = this.updateItemForm.value.categoryID;
    this.itemObject.wrates = this.updateItemForm.value.wrates;
    this.itemObject.userId = this.updateItemForm.value.userId;
    this.itemObject.brId = this.updateItemForm.value.brId;
    this.itemObject.orgId = this.updateItemForm.value.orgId;

    this.itemMasterService.updateItemMaster(this.itemObject).subscribe(res => {
      alert('record update successfully !!')
      this.updateItemForm.reset();

    })
    this.toggleTable();

  }
  
  // deleteItem(itemCode:any){
  //   return this.itemMasterService.deleteItemMaster(itemCode).subscribe(res=>{
  //     console.log(res);
  //     alert("record deleted ....")
      
  //   })
  // }

}
