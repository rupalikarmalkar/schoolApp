import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Branch } from 'src/app/model/branchData';
import { BranchServiceService } from 'src/app/services/branch-service.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {
titleName:string="Branch Details"
// Form  group and object
branchForm!:FormGroup;
branchUpdateForm!:FormGroup;

branchObject = new Branch;

// boolean  variable
submitted: boolean = false;
branchFormHide=false;
branchLogHide=true;
branchAddBtn=true;
branchUpdateFormHide=false;

// required array
getBranchArray:any=[];
array:any=[]

constructor(
  private  _http:HttpClient ,
  private _branchService:BranchServiceService
  ){
  this.getBranchLog();
 this.createUpdateForm();
 this.createForm();
}

toggleAddBtn() {
  this.branchLogHide = false;
  this.branchUpdateFormHide = false;
  this.branchAddBtn = false;
  this.branchFormHide = true;
}

toggleTable(){
  this.branchLogHide=!this.branchLogHide;
  this.branchUpdateFormHide=false;
  this.branchAddBtn=true;
  this.branchFormHide=false;
  this.getBranchLog();
}
updateFormToggle(){
  this.branchUpdateFormHide=!this.branchUpdateFormHide;
  this.branchFormHide=false;
  this.branchLogHide=false;
  this.branchAddBtn=false;
} 

titleHide=true;

  titleToggle(){
    this.titleHide=!this.titleHide;
  }
createForm() {
this.branchForm = new FormGroup({
  'userID':new FormControl('', Validators.required),
  'organizationID':new FormControl('', Validators.required),
   'branchName': new FormControl('', Validators.required),
  'branchEmail': new FormControl('', [Validators.required, Validators.email]),
  'isActive': new FormControl('', Validators.required),
  'createdBy': new FormControl('', Validators.required),
  'createdDate': new FormControl('', Validators.required),
  'updateDate': new FormControl('', Validators.required),
  'branchID': new FormControl('', Validators.required),
})
}

createUpdateForm() {
this.branchUpdateForm = new FormGroup({
  'userID':new FormControl('', Validators.required),
  'organizationID':new FormControl('', Validators.required),

  'branchName': new FormControl('', Validators.required),
  'branchEmail': new FormControl('', [Validators.required, Validators.email]),
  'isActive': new FormControl('', Validators.required),
  'createdBy': new FormControl('', Validators.required),
  'createdDate': new FormControl('', Validators.required),
  'updateDate': new FormControl('', Validators.required),
  'branchID': new FormControl('', Validators.required),
})
}
onSubmit(organizationForm:NgForm){
this.branchObject = new Branch ;
this.submitted = true;

this.branchObject.userID = this.branchForm.value.userID;
this.branchObject.organizationID = this.branchForm.value.organizationID;

this.branchObject.branchName = this.branchForm.value.branchName;
this.branchObject.branchEmail = this.branchForm.value.branchEmail;
this.branchObject.isActive = this.branchForm.value.isActive;
this.branchObject.createdBy = this.branchForm.value.createdBy;
this.branchObject.createdDate = this.branchForm.value.createdDate;
this.branchObject.updateDate = this.branchForm.value.updateDate;
this.branchObject.branchID = this.branchForm.value.branchID;

this.array.push(this.branchObject);
this.postBranchRecord(this.branchObject);

console.log("Array data", this.array);

this.branchForm.reset();
this.toggleTable();
// this.getBranchLog();

}

getBranchLog(){
return this._branchService.getBranch().subscribe(res=>{
  // console.log(res);
  this.getBranchArray=res;
  console.log(this.getBranchArray);
})
}
postBranchRecord(branch:Branch){
return this._branchService.postBranch(branch).subscribe(res=>{
console.log(res);
})
}

onEdit(p:Branch){
// console.log(p);

this.branchObject.organizationID = p.organizationID;
this.branchObject.userID = p.userID;

this.branchObject.branchName = p.branchName;
this.branchObject.branchEmail = p.branchEmail;
this.branchObject.isActive = p.isActive;
this.branchObject.createdBy = p.createdBy;
this.branchObject.createdDate = p.createdDate;
this.branchObject.updateDate = p.updateDate;
this.branchObject.branchID = p.branchID;

this.createUpdateForm();
this.branchUpdateForm.controls['organizationID'].setValue(this.branchObject.organizationID);
this.branchUpdateForm.controls['userID'].setValue(this.branchObject.userID);


this.branchUpdateForm.controls['branchName'].setValue(this.branchObject.branchName);
this.branchUpdateForm.controls['branchEmail'].setValue(this.branchObject.branchEmail);
this.branchUpdateForm.controls['isActive'].setValue(this.branchObject.isActive);
this.branchUpdateForm.controls['createdBy'].setValue(this.branchObject.createdBy);
this.branchUpdateForm.controls['createdDate'].setValue(this.branchObject.createdDate);
this.branchUpdateForm.controls['updateDate'].setValue(this.branchObject.updateDate);

}
UpdateBranchDetails(p:Branch){
// console.log(p);
this.branchUpdateForm.controls['organizationID'].setValue(p.organizationID);
this.branchUpdateForm.controls['userID'].setValue(p.userID);

this.branchUpdateForm.controls['branchName'].setValue(p.branchName);
this.branchUpdateForm.controls['branchEmail'].setValue(p.branchEmail);
this.branchUpdateForm.controls['isActive'].setValue(p.isActive);
this.branchUpdateForm.controls['createdBy'].setValue(p.createdBy);
this.branchUpdateForm.controls['createdDate'].setValue(p.createdDate);
this.branchUpdateForm.controls['updateDate'].setValue(p.updateDate);


this.branchObject.organizationID = this.branchUpdateForm.value.organizationID;
this.branchObject.userID = this.branchUpdateForm.value.userID;

this.branchObject.branchName = this.branchUpdateForm.value.branchName;
this.branchObject.branchEmail = this.branchUpdateForm.value.branchEmail;
this.branchObject.isActive = this.branchUpdateForm.value.isActive;
this.branchObject.createdBy = this.branchUpdateForm.value.createdBy;
this.branchObject.createdDate = this.branchUpdateForm.value.createdDate;
this.branchObject.updateDate = this.branchUpdateForm.value.updateDate;
   
  
this._branchService.updateBranch(this.branchObject).subscribe(res=>{
  alert('record update successfully !!')
  this.branchUpdateForm.reset();

})
// this.getBranchLog();
this.toggleTable();



}


// deleteBranchRecord(p:Branch){
// console.log(p);
// this.branchObject.organizationID = p.organizationID;
// this.branchObject.organizationName = p.organizationName;
// this.branchObject.organizationEmail = p.organizationEmail;
// this.branchObject.isActive = p.isActive;
// this.branchObject.createdBy = p.createdBy;
// this.branchObject.createdDate = p.createdDate;
// this.branchObject.updateDate = p.updateDate;
// this.branchObject.branchID = p.branchID;


// return this._branchService.deleteBranch(p).subscribe(res=>{
//   alert('Student Record Deleted successfully')

// })
// }



}
