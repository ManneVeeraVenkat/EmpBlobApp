import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpolyeeDataComponent } from './add-empolyee-data/add-empolyee-data.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { GetEmployeedetailsComponent } from './get-employeedetails/get-employeedetails.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  // {path:'home',component:HomeComponent},
  { path: 'add-employee', component: AddEmpolyeeDataComponent},
  { path: 'get-employees', component: GetAllEmployeesComponent },
  { path: 'employees', component: GetAllEmployeesComponent },
  { path: 'edit-employee/:employeeName',component: EditEmployeeComponent},
  { path: 'employee-details/:employeeId', component: GetEmployeedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
