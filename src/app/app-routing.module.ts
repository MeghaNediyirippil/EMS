import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewFullDetailsComponent } from './view-full-details/view-full-details.component';
import { IdCardComponent } from './id-card/id-card.component';

const routes: Routes = [
  {
    path:'',redirectTo:'mainComponent',pathMatch:"full"
  },
  {
    path:'mainComponent',component:MainComponentComponent
  },
  {
    path:'mainComponent/addEmployee',component:AddEmployeeComponent
  },
  {
    path:'mainComponent/viewEmployeeDetails',component:ViewEmployeeDetailsComponent
  },
  {
    path:'mainComponent/viewEmployeeDetails/editEmployeeDetails/:id',component:EditEmployeeDetailsComponent
  },
  {
    path:'mainComponent/viewEmployeeDetails/viewFullDetails/:id',component:ViewFullDetailsComponent
  },
  {
    path:'mainComponent/viewEmployeeDetails/IdCardDetails/:id',component:IdCardComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
