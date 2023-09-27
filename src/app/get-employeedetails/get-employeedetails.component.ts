import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmpBlobServiceService } from 'src/services/emp-blob-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-employeedetails',
  templateUrl: './get-employeedetails.component.html',
  styleUrls: ['./get-employeedetails.component.css']
})
export class GetEmployeedetailsComponent implements OnInit {
  employeeName: string | null = null;
  employee !: employee
  employees !: employee[];
  constructor(private service: EmpBlobServiceService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    const employeeNameParam = this.route.snapshot.paramMap.get('employeeName');
    if (employeeNameParam !== null) {
      this.employeeName = employeeNameParam;
      this.loadEmployeeDetails(this.employeeName);
    } else {
      console.error(`Employee name parameter not found.`);
    }
  }
  loadEmployeeDetails(employeeName: string) {
    this.service.ViewEmployeeData(employeeName).subscribe(employee => {
      if (employee) {
        this.employee = employee
      }
      else {
        console.error(`Employee with full name ${employeeName} not found.`);
      }
    }
    )
  }
  goBack(): void {
    // Navigate back to the employee list component
    this.router.navigate(['/get-employees']);
  }
  editEmployee(employeeName: string) {
    this.router.navigate(['/edit-employee', employeeName]);
  }
}
