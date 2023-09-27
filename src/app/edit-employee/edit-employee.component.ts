import { Component } from '@angular/core';
import { employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpBlobServiceService } from 'src/services/emp-blob-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employee: employee = new employee(); // Initialize with empty employee data
  employeeName: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmpBlobServiceService
  ) { }

  ngOnInit(): void {
    // Get the employee ID from the route parameter
    const employeeNameParam = this.route.snapshot.paramMap.get('employeeName');
  
    // Check if employeeNameParam is not null before assigning it
    if (employeeNameParam !== null) {
      this.employeeName = employeeNameParam;
  
      // Retrieve the employee data by name and populate the form
      this.service.ViewEmployeeData(this.employeeName).subscribe((data) => {
        if (data) {
          this.employee = data;
        } else {
          // Handle the case where the employee data is not found
          console.error(`Employee with name ${this.employeeName} not found.`);
        }
      });
    } else {
      console.error(`Employee name parameter not found.`);
    }
  }
  
  onSubmit(): void {
    // Check if employeeName is not null before updating the employee data
    if (this.employeeName !== null) {
      // Update the employee data using the service
      this.service.UpdateEmployee(this.employeeName, this.employee).subscribe(() => {
        // Employee updated, navigate back to the employee list
        this.router.navigate(['/get-employees']);
      });
    } else {
      console.error(`Employee name is null.`);
    }
  }
  

}
