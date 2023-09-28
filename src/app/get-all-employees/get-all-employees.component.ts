import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmpBlobServiceService } from 'src/services/emp-blob-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent implements OnInit {

  employees !: employee[]
  // selectedEmployee: employee | null = null; 
  filteredEmployees: employee[] = [];
  searchkey: string = '';
  itemsPerPage: number = 10; // Number of items to display per page
  currentPage: number = 1;

  cityFilter: string = ''; // Add city filter
  jobFilter: string = '';  // Add job filter


  constructor(private service: EmpBlobServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployeess();

  }
  loadEmployeess(): void {
    this.service.getAllEmployees().subscribe((data: employee[]) => {
      this.employees = data;
      this.filteredEmployees = [...this.employees];
      
    });
    // this.service.getAllEmployees().subscribe(data => {
    //   this.employees = data})
  }
  deleteEmployee(employeeId: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.service.deleteEmployee(employeeId).subscribe(() => {
        // Employee deleted, refresh the list
        this.loadEmployeess();
      });
    }
  }

  viewEmployeeDetails(employeeId: number) {
    this.router.navigate(['/employee-details', employeeId]);
  }
  editEmployee(employeeId: number) {
    this.router.navigate(['/edit-employee', employeeId]);
  }
  search() {

    if (this.searchkey) {

      this.employees = this.employees.filter((employee) => {

        // Check if the searchkey is found in any attribute (e.g., first name, last name)

        const searchKeyLower = this.searchkey.toLowerCase();

        return (
          employee.employeeId.toString().toLowerCase().includes(searchKeyLower) ||

          employee.firstName.toLowerCase().includes(searchKeyLower) ||

          employee.lastName.toLowerCase().includes(searchKeyLower) ||

          employee.desigination.toLowerCase().includes(searchKeyLower) ||

          employee.location.toLowerCase().includes(searchKeyLower) ||

          employee.department.toLowerCase().includes(searchKeyLower) ||

          employee.skill.toLowerCase().includes(searchKeyLower) ||

          employee.salary.toString().toLowerCase().includes(searchKeyLower)

        );

      });

    } else {

      // If the search key is empty, load all employees

      this.loadEmployeess();

    }
    this.currentPage = 1;

  }

  // applyFilters(): void {
  //   // Apply filters to the employees array
  //   this.employees = this.employees
  //     .filter(employee => {
  //       if (this.cityFilter && !employee.location.toLowerCase().includes(this.cityFilter.toLowerCase())) {
  //         return false; // Filter out employees that do not match the city filter
  //       }
  
  //       if (this.jobFilter && !employee.department.toLowerCase().includes(this.jobFilter.toLowerCase())) {
  //         return false; // Filter out employees that do not match the job filter
  //       }
  
  //       // Add more filter conditions for other properties as needed
  
  //       return true; // Include the employee if it passes all filters
  //     })
  //     .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  // }

  // resetFilters(): void {
  //   this.cityFilter = '';
  //   this.jobFilter = '';
  //   // Reset other filters as needed
  //   this.applyFilters(); // Apply filters to reset the displayed employees
  // }
  
  
  // renderPage(event: number) {
  //   this.currentPage = event;
  //   this.loadEmployeess();
  // }

  // viewEmployeeDetails(employeeName:string){
  //   this.service.downloadEmployeeData(employeeName).subscribe(employee => {
  //     if (employee) {
  //       this.selectedEmployee = employee;
  //     } else {
  //       // Handle the case where the employee data is not found
  //       // For example, you can display an error message or navigate to an error page.
  //       console.error(`Employee with full name ${employeeName} not found.`);
  //     }
  //   });
  // }


}
