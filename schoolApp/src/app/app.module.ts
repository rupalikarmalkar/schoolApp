import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentModule } from './student/student.module';
import { MenuComponent } from './components/menu/menu.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboargComponent } from './components/dashboarg/dashboarg.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { BranchComponent } from './components/branch/branch.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserRegistorComponent } from './components/user-registor/user-registor.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdmissionEnquiryComponent,
    // FamilyInfoComponent,
    // LsatSchoolInfoComponent,
    HomeComponent,
    MenuComponent,
    SideBarComponent,
    DashboargComponent,
    RegistrationComponent,
    OrganizationComponent,
    BranchComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    UserRegistorComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     StudentModule,
     FormsModule,
     HttpClientModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
