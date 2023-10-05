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
  employeeId: number | null = null;
  employee !: employee
  employees !: employee[];
  constructor(private service: EmpBlobServiceService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    const employeeIdParam = this.route.snapshot.paramMap.get('employeeId');
    if (employeeIdParam !== null) {
      this.employeeId = Number(employeeIdParam);
      this.loadEmployeeDetails(this.employeeId);
    } else {
      console.error(`Employee name parameter not found.`);
    }
  }
  loadEmployeeDetails(employeeId: number) {
    this.service.ViewEmployeeData(employeeId).subscribe(employee => {
      if (employee) {
        this.employee = employee
      }
      else {
        console.error(`Employee with full name ${employeeId} not found.`);
      }
    }
    )
  }
  goBack(): void {
    // Navigate back to the employee list component
    this.router.navigate(['/get-employees']);
  }
  editEmployee(employeeId: number) {
    this.router.navigate(['/edit-employee', employeeId]);
  }
}
