import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AdmissionEnquiryComponent } from '../admission-enquiry/admission-enquiry.component';
import { FamilyInfoComponent } from '../family-info/family-info.component';
import { LsatSchoolInfoComponent } from '../lsat-school-info/lsat-school-info.component';
import { AdmissionComponent } from './admission/admission.component';
import { FamilyComponent } from './family/family.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdmissionEnquiryComponent,
    FamilyInfoComponent,
    LsatSchoolInfoComponent,
    AdmissionComponent,
    FamilyComponent,
    SchoolComponent,
    StudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[]


})
export class StudentModule { }
