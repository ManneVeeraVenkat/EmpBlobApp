import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpolyeeDataComponent } from './add-empolyee-data/add-empolyee-data.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { UpdateEmployeeDataComponent } from './update-employee-data/update-employee-data.component';
import { GetEmployeedetailsComponent } from './get-employeedetails/get-employeedetails.component';
// import { EditEmployeedetailsComponent } from './edit-employeedetails/edit-employeedetails.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpolyeeDataComponent,
    GetAllEmployeesComponent,
    UpdateEmployeeDataComponent,
    GetEmployeedetailsComponent,
    // EditEmployeedetailsComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
