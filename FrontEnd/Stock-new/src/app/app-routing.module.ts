import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './User/userdashboard/userdashboard.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { IPOsComponent } from './User/ipos/ipos.component';
import { CompareCompaniesComponent } from './User/compare-companies/compare-companies.component';
import { CompareSectorComponent } from './User/compare-sector/compare-sector.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './Admin/admin-navbar/admin-navbar.component';
import { ManageCompanyComponent } from './Admin/manage-company/manage-company.component';
import { ManageExchangeComponent } from './Admin/manage-exchange/manage-exchange.component';
import { UpdateIPODetailsComponent } from './Admin/update-ipodetails/update-ipodetails.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { LoginAsAdminComponent } from './Login/login-as-admin/login-as-admin.component';
import { LoginAsUserComponent } from './Login/login-as-user/login-as-user.component';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { SignupComponent } from './Signup/signup/signup.component';
import { VelIpoComponent } from './Admin/vel-ipo/vel-ipo.component';
import { EditIpoComponent } from './Admin/edit-ipo/edit-ipo.component';
import { VelCompanyComponent } from './Admin/vel-company/vel-company.component';
import { VelExchangeComponent } from './Admin/vel-exchange/vel-exchange.component';
import { AddSecComponent } from './Admin/add-sec/add-sec.component';

const routes: Routes = [

 {path:'home-page',component:HomePageComponent},  //children:[
  //   {path:'login',component:LoginPageComponent,children:[
  //     {path:'login-as-user',component:LoginAsUserComponent},
  //     {path:'login-as-admin',component:LoginAsAdminComponent}
  //   ]},
  //   {path:'sign-up',component:SignupComponent}
  // ]},

  {path:'login-as-admin',component:LoginAsAdminComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'login',component:LoginPageComponent},
  {path:'loginasuser',component:LoginAsUserComponent},
{path:'Admin-dashboard',component:AdminDashboardComponent,children:[
      {path:'Manage-Company',component: ManageCompanyComponent},
      {path:'Manage-Exchange',component:ManageExchangeComponent},
      {path:'UpdateIpo',component: UpdateIPODetailsComponent},
      {path:'VelIpo',component: VelIpoComponent},
      {path:'edit-ipo',component: EditIpoComponent},
      {path:'Velcompany',component: VelCompanyComponent},
      {path:'Velexc',component: VelExchangeComponent},
      {path:'add-sec',component: AddSecComponent}

    ]},

    {path:'user-dashboard',component:UserdashboardComponent,children:[
      {path:'Compare-Company',component: CompareCompaniesComponent},
      {path:'Compare-Sector',component:CompareSectorComponent},
      {path:'Ipo',component: IPOsComponent }

    ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
