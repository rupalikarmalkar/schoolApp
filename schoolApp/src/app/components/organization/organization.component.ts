import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Organization } from 'src/app/model/organizationData';
import { OrganizationServiceService } from 'src/app/services/organization-service.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {

  titleName:string="Organization Details"
  searchName:string="";
  
  // Form  group and object
  organizationForm!: FormGroup;
  organizationUpdateForm!: FormGroup;

  orgObject = new Organization;

  // boolean  variable
  submitted: boolean = false;
  orgFormHide = false;
  orgLogHide = true;
  orgAddBtn = true;
  orgUpdateFormHide = false;

  // required array
  getOrgArray: any = [];
  array: any = []

  constructor(
    private _http: HttpClient,
    private _organizationService: OrganizationServiceService
  ) {
    this.getOrganizationLog();
    this.createUpdateForm();
    this.createForm();
  }
  titleHide=true;

  titleToggle(){
    this.titleHide=!this.titleHide;

  }


  toggleAddBtn() {
    this.orgLogHide = false;
    this.orgUpdateFormHide = false;
    this.orgAddBtn = false;
    this.orgFormHide = true;
  }

  toggleTable() {
    this.orgLogHide = !this.orgLogHide;
    this.orgUpdateFormHide = false;
    this.orgAddBtn = true;
    this.orgFormHide = false;
    this.getOrganizationLog();
  }
  updateFormToggle() {
    this.orgUpdateFormHide = !this.orgUpdateFormHide;
    this.orgFormHide = false;
    this.orgLogHide = false;
    this.orgAddBtn = false;
  }


  createForm() {
    this.organizationForm = new FormGroup({
      'organizationName': new FormControl('', Validators.required),
      'organizationEmail': new FormControl('', [Validators.required, Validators.email]),
      'isActive': new FormControl('', Validators.required),
      'createdBy': new FormControl('', Validators.required),
      'createdDate': new FormControl('', Validators.required),
      'updateDate': new FormControl('', Validators.required),
      'branchID': new FormControl('', Validators.required),
      'userID': new FormControl('', Validators.required),

    })
  }

  createUpdateForm() {
    this.organizationUpdateForm = new FormGroup({
      'organizationName': new FormControl('', Validators.required),
      'organizationEmail': new FormControl('', [Validators.required, Validators.email]),
      'isActive': new FormControl('', Validators.required),
      'createdBy': new FormControl('', Validators.required),
      'createdDate': new FormControl('', Validators.required),
      'updateDate': new FormControl('', Validators.required),
      'branchID': new FormControl('', Validators.required),
      'userID': new FormControl('', Validators.required),

    })
  }
  onSubmit(organizationForm: NgForm) {
    this.orgObject = new Organization;
    this.submitted = true;
    this.orgObject.organizationName = this.organizationForm.value.organizationName;
    this.orgObject.organizationEmail = this.organizationForm.value.organizationEmail;
    this.orgObject.isActive = this.organizationForm.value.isActive;
    this.orgObject.createdBy = this.organizationForm.value.createdBy;
    this.orgObject.createdDate = this.organizationForm.value.createdDate;
    this.orgObject.updateDate = this.organizationForm.value.updateDate;
    this.orgObject.branchID = this.organizationForm.value.branchID;
    this.orgObject.userID = this.organizationForm.value.userID;


    this.array.push(this.orgObject);
    this.postOrganizationRecord(this.orgObject);

    console.log("Array data", this.array);

    this.organizationForm.reset();


    this.toggleTable();

  }

  getOrganizationLog() {
    return this._organizationService.getOrganization().subscribe(res => {
      // console.log(res);
      this.getOrgArray = res;
      console.log(this.getOrgArray);

    })
  }
  postOrganizationRecord(org: Organization) {
    return this._organizationService.postOrganization(org).subscribe(res => {
      console.log(res);
    })
  }

  onEdit(p: Organization) {
    // console.log(p);

    this.orgObject.organizationID = p.organizationID;
    this.orgObject.organizationName = p.organizationName;
    this.orgObject.organizationEmail = p.organizationEmail;
    this.orgObject.isActive = p.isActive;
    this.orgObject.createdBy = p.createdBy;
    this.orgObject.createdDate = p.createdDate;
    this.orgObject.updateDate = p.updateDate;
    this.orgObject.branchID = p.branchID;
    this.orgObject.userID = p.userID;


    this.createUpdateForm();
    this.organizationUpdateForm.controls['organizationName'].setValue(this.orgObject.organizationName);
    this.organizationUpdateForm.controls['organizationEmail'].setValue(this.orgObject.organizationEmail);
    this.organizationUpdateForm.controls['isActive'].setValue(this.orgObject.isActive);
    this.organizationUpdateForm.controls['createdBy'].setValue(this.orgObject.createdBy);
    this.organizationUpdateForm.controls['createdDate'].setValue(this.orgObject.createdDate);
    this.organizationUpdateForm.controls['updateDate'].setValue(this.orgObject.updateDate);
    this.organizationUpdateForm.controls['branchID'].setValue(this.orgObject.branchID);
    this.organizationUpdateForm.controls['userID'].setValue(this.orgObject.userID);

  }
  UpdateOrganizationDetails(p: Organization) {
    // console.log(p);
    this.organizationUpdateForm.controls['organizationName'].setValue(p.organizationName);
    this.organizationUpdateForm.controls['organizationEmail'].setValue(p.organizationEmail);
    this.organizationUpdateForm.controls['isActive'].setValue(p.isActive);
    this.organizationUpdateForm.controls['createdBy'].setValue(p.createdBy);
    this.organizationUpdateForm.controls['createdDate'].setValue(p.createdDate);
    this.organizationUpdateForm.controls['updateDate'].setValue(p.updateDate);
    this.organizationUpdateForm.controls['branchID'].setValue(p.branchID);
    this.organizationUpdateForm.controls['userID'].setValue(p.userID);




    this.orgObject.organizationName = this.organizationUpdateForm.value.organizationName;
    this.orgObject.organizationEmail = this.organizationUpdateForm.value.organizationEmail;
    this.orgObject.isActive = this.organizationUpdateForm.value.isActive;
    this.orgObject.createdBy = this.organizationUpdateForm.value.createdBy;
    this.orgObject.createdDate = this.organizationUpdateForm.value.createdDate;
    this.orgObject.updateDate = this.organizationUpdateForm.value.updateDate;
    this.orgObject.branchID = this.organizationUpdateForm.value.branchID;
    this.orgObject.userID = this.organizationUpdateForm.value.userID;



    this._organizationService.updateOrganization(this.orgObject).subscribe(res => {
      alert('record update successfully !!')
      this.organizationUpdateForm.reset();

    })
    // this.getOrganizationLog();
    this.toggleTable();
  }


  deleteOrganizationRecord(p: Organization) {
    console.log(p);
    this.orgObject.organizationID = p.organizationID;
    this.orgObject.organizationName = p.organizationName;
    this.orgObject.organizationEmail = p.organizationEmail;
    this.orgObject.isActive = p.isActive;
    this.orgObject.createdBy = p.createdBy;
    this.orgObject.createdDate = p.createdDate;
    this.orgObject.updateDate = p.updateDate;
    this.orgObject.branchID = p.branchID;
    this.orgObject.userID = p.userID;



    return this._organizationService.deleteOrganization(p).subscribe(res => {
      alert('Student Record Deleted successfully')

    })
  }


}
