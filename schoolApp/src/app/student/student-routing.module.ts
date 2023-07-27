import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionEnquiryComponent } from '../admission-enquiry/admission-enquiry.component';
import { FamilyInfoComponent } from '../family-info/family-info.component';
import { LsatSchoolInfoComponent } from '../lsat-school-info/lsat-school-info.component';
import { AdmissionComponent } from './admission/admission.component';
import { FamilyComponent } from './family/family.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'',component:StudentComponent ,children:[ 
  { path:'admission', component:AdmissionComponent }, 
  { path:'family',  component:FamilyComponent },
  { path:'school',  component:SchoolComponent }]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
