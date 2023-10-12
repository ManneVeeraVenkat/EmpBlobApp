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
  employee: employee = new employee(); // Initialize with empty employee data (excluding image)
  employeeId: number | null = null;
  profilePicture: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmpBlobServiceService
  ) { }

  ngOnInit(): void {
    // Get the employee ID from the route parameter
    const employeeIdParam = this.route.snapshot.paramMap.get('employeeId');

    // Check if employeeIdParam is not null before assigning it
    if (employeeIdParam !== null) {
      this.employeeId = Number(employeeIdParam);

      // Retrieve the employee data by ID (excluding image) and populate the form
      this.service.ViewEmployeeData(this.employeeId).subscribe((data) => {
        if (data && data.employeeData) {
          // Populate the employee data (excluding image)
          this.employee = {
            id:data.employeeData.id,
            employeeId:data.employeeData.employeeId,
            firstName: data.employeeData.firstName,
            lastName: data.employeeData.lastName,
            desigination: data.employeeData.position,
            department: data.employeeData.department,
            location: data.employeeData.location,
            skill: data.employeeData.skill,
            salary: data.employeeData.salary
          };

          // Retain the profile picture data, if available
          if (data.profilePicture) {
            this.profilePicture = data.profilePicture;
          }
        } else {
          // Handle the case where the employee data is not found
          console.error(`Employee with ID ${this.employeeId} not found.`);
        }
      });
    } else {
      console.error(`Employee ID parameter not found.`);
    }
  }

  onSubmit(): void {
    if (this.employeeId !== null) {
      const formData = new FormData();
      formData.append('employee', JSON.stringify(this.employee));

      // Check if a new profile picture has been selected and handle the upload
      if (this.profilePicture) {
        formData.append('profilePicture', this.profilePicture, this.profilePicture.name);
      }

      // Update the employee data and profile picture using the service
      this.service.updateEmployeeWithProfilePic(this.employeeId, formData).subscribe((response: any) => {
        if (response) {
          // Employee data and profile picture updated, navigate back to the employee list
          this.router.navigate(['/get-employees']);
        } else {
          console.error(`Error updating employee.`);
        }
      });
    } else {
      console.error(`Employee ID is null.`);
    }
  }

  handleFileInput(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.profilePicture = fileList[0];
    }
  }
  

}
