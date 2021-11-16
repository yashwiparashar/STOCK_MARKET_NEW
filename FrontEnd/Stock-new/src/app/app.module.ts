import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { LoginAsAdminComponent } from './Login/login-as-admin/login-as-admin.component';
import { LoginAsUserComponent } from './Login/login-as-user/login-as-user.component';
import { SignupComponent } from './Signup/signup/signup.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ImportDataComponent } from './Admin/import-data/import-data.component';
import { ManageCompanyComponent } from './Admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './Admin/manage-exchange/manage-exchange.component';
import { UpdateIPODetailsComponent } from './Admin/update-ipodetails/update-ipodetails.component';
import { UserdashboardComponent } from './User/userdashboard/userdashboard.component';
import { IPOsComponent } from './User/ipos/ipos.component';
import { CompareCompaniesComponent } from './User/compare-companies/compare-companies.component';
import { CompareSectorComponent } from './User/compare-sector/compare-sector.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import {HttpClientModule} from '@angular/common/http'

import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { IpoService } from './Services/ipo.service';
import { UserService } from './Services/user.service';
import { AddIpoComponent } from './User/add-ipo/add-ipo.component';
import { VelIpoComponent } from './Admin/vel-ipo/vel-ipo.component';
import { VelCompanyComponent } from './Admin/vel-company/vel-company.component';
import { VelExchangeComponent } from './Admin/vel-exchange/vel-exchange.component';
import { EditIpoComponent } from './Admin/edit-ipo/edit-ipo.component';
import { AddSecComponent } from './Admin/add-sec/add-sec.component';
import { CompanyService } from './Services/company.service';
import { ExchangeService } from './Services/exchange.service';
import { SectorService } from './Services/sector.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginAsAdminComponent,
    LoginAsUserComponent,
    SignupComponent,
    HomePageComponent,
    AdminDashboardComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPODetailsComponent,
    UserdashboardComponent,
    IPOsComponent,
    CompareCompaniesComponent,
    CompareSectorComponent,
    AdminNavbarComponent,
    
    UserNavbarComponent,
         AddIpoComponent,
         VelIpoComponent,
         VelCompanyComponent,
         VelExchangeComponent,
         EditIpoComponent,
         AddSecComponent,
        
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [IpoService,UserService,CompanyService,ExchangeService,SectorService],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
