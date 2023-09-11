import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserData } from 'src/app/model/userData';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  titleName:string="User Details"

  
// Form  group and object
userForm!:FormGroup;
userUpdateForm!:FormGroup;

userObject = new UserData;

// boolean  variable
submitted: boolean = false;
userFormHide=false;
userLogHide=true;
userAddBtn=true;
userUpdateFormHide=false;

// required array
getUserArray:any=[];
array:any=[]

constructor(
  private  _http:HttpClient ,
  private _userService:UserServiceService
  ){
  this.getUserLog();
 this.createUpdateForm();
 this.createForm();
}
titleHide=true;

titleToggle(){
  this.titleHide=!this.titleHide;
}

toggleAddBtn() {
  this.userLogHide = false;
  this.userUpdateFormHide = false;
  this.userAddBtn = false;
  this.userFormHide = true;
}

 

toggleTable(){
  this.userLogHide=!this.userLogHide;
  this.userUpdateFormHide=false;
  this.userAddBtn=true;
  this.userFormHide=false;
  this.getUserLog();
}
updateFormToggle(){
  this.userUpdateFormHide=!this.userUpdateFormHide;
  this.userFormHide=false;
  this.userLogHide=false;
  this.userAddBtn=false;
} 

// this.userName = userName;
// this.userEmail
createForm() {
this.userForm = new FormGroup({
   'userName': new FormControl('', Validators.required),
  'userEmail': new FormControl('', [Validators.required, Validators.email]),
  'isActive': new FormControl('', Validators.required),
  'createdBy': new FormControl('', Validators.required),
  'createdDate': new FormControl('', Validators.required),
  'updateDate': new FormControl('', Validators.required),
  'branchID': new FormControl('', Validators.required),
})
}

createUpdateForm() {
this.userUpdateForm = new FormGroup({
  'organizationID': new FormControl('', Validators.required),
   'userName': new FormControl('', Validators.required),
  'userEmail': new FormControl('', [Validators.required, Validators.email]),
  'isActive': new FormControl('', Validators.required),
  'createdBy': new FormControl('', Validators.required),
  'createdDate': new FormControl('', Validators.required),
  'updateDate': new FormControl('', Validators.required),
  'branchID': new FormControl('', Validators.required),
})
}
onSubmit(userForm:NgForm){
this.userObject = new UserData ;
this.submitted = true;
this.userObject.organizationID=this.userForm.value.organizationID;
this.userObject.userName = this.userForm.value.userName;
this.userObject.userEmail = this.userForm.value.userEmail;
this.userObject.isActive = this.userForm.value.isActive;
this.userObject.createdBy = this.userForm.value.createdBy;
this.userObject.createdDate = this.userForm.value.createdDate;
this.userObject.updateDate = this.userForm.value.updateDate;
this.userObject.branchID = this.userForm.value.branchID;

this.array.push(this.userObject);
this.postOrganizationRecord(this.userObject);

console.log("Array data", this.array);

this.userForm.reset();
this.toggleTable();

}

getUserLog(){
return this._userService.getUser().subscribe(res=>{
  // console.log(res);
  this.getUserArray=res;
  console.log(this.getUserArray);
})
}
postOrganizationRecord(user:UserData){
return this._userService.postUser(user).subscribe(res=>{
console.log(res);
})
}

onEdit(p:UserData){
// console.log(p);

this.userObject.organizationID = p.organizationID;
this.userObject.userName = p.userName;
this.userObject.userEmail = p.userEmail;
this.userObject.isActive = p.isActive;
this.userObject.createdBy = p.createdBy;
this.userObject.createdDate = p.createdDate;
this.userObject.updateDate = p.updateDate;
this.userObject.branchID = p.branchID;

this.createUpdateForm();
this.userUpdateForm.controls['userName'].setValue(this.userObject.userName);
this.userUpdateForm.controls['userEmail'].setValue(this.userObject.userEmail);
this.userUpdateForm.controls['isActive'].setValue(this.userObject.isActive);
this.userUpdateForm.controls['createdBy'].setValue(this.userObject.createdBy);
this.userUpdateForm.controls['createdDate'].setValue(this.userObject.createdDate);
this.userUpdateForm.controls['updateDate'].setValue(this.userObject.updateDate);
this.userUpdateForm.controls['branchID'].setValue(this.userObject.branchID);
// this.UpdateStudentDetails(this.orgObject);
}
UpdateUserDetails(p:UserData){
// console.log(p);
this.userUpdateForm.controls['userName'].setValue(p.userName);
this.userUpdateForm.controls['userEmail'].setValue(p.userEmail);
this.userUpdateForm.controls['isActive'].setValue(p.isActive);
this.userUpdateForm.controls['createdBy'].setValue(p.createdBy);
this.userUpdateForm.controls['createdDate'].setValue(p.createdDate);
this.userUpdateForm.controls['updateDate'].setValue(p.updateDate);
this.userUpdateForm.controls['branchID'].setValue(p.branchID);



this.userObject.userName = this.userUpdateForm.value.userName;
this.userObject.userEmail = this.userUpdateForm.value.userEmail;
this.userObject.isActive = this.userUpdateForm.value.isActive;
this.userObject.createdBy = this.userUpdateForm.value.createdBy;
this.userObject.createdDate = this.userUpdateForm.value.createdDate;
this.userObject.updateDate = this.userUpdateForm.value.updateDate;
this.userObject.branchID = this.userUpdateForm.value.branchID;
   
  
this._userService.updateUser(this.userObject).subscribe(res=>{
  alert('record update successfully !!')
  this.userUpdateForm.reset();

})
// this.getUserLog();
this.toggleTable();


}


// deleteUserRecord(p:UserData){
// console.log(p);
// this.userObject.organizationID = p.organizationID;
// this.userObject.organizationName = p.organizationName;
// this.userObject.organizationEmail = p.organizationEmail;
// this.userObject.isActive = p.isActive;
// this.userObject.createdBy = p.createdBy;
// this.userObject.createdDate = p.createdDate;
// this.userObject.updateDate = p.updateDate;
// this.userObject.branchID = p.branchID;


// return this._userService.deleteUser(p).subscribe(res=>{
//   alert('Student Record Deleted successfully')

// })


}





