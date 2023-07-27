import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionEnquiryComponent } from './admission-enquiry/admission-enquiry.component';
import { FamilyInfoComponent } from './family-info/family-info.component';
import { LsatSchoolInfoComponent } from './lsat-school-info/lsat-school-info.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboargComponent } from './components/dashboarg/dashboarg.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { BranchComponent } from './components/branch/branch.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserRegistorComponent } from './components/user-registor/user-registor.component';

// const routes: Routes = [];
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'userRegistor', component:UserRegistorComponent},
  // {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboargComponent},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'organization',component:OrganizationComponent},
  {path:'branch',component:BranchComponent},
  {path:'user',component:UserComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
