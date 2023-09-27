import { Component, OnInit } from '@angular/core';
import { EmpBlobServiceService } from 'src/services/emp-blob-service.service';
import { employee } from '../employee';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-empolyee-data',
  templateUrl: './add-empolyee-data.component.html',
  styleUrls: ['./add-empolyee-data.component.css']
})
export class AddEmpolyeeDataComponent implements OnInit {
  public employee!: FormGroup

  containerName: string = " "
  employeeName: string = " "




  constructor(private services: EmpBlobServiceService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.employee = new FormGroup({
     
      EmployeeId: new FormControl(),
      FirstName: new FormControl(),
      LastName: new FormControl(),
      Desigination: new FormControl(),
      Department: new FormControl(),
      Location: new FormControl(),
      Skill: new FormControl(),
      Salary: new FormControl(),


    })
  }
  onSubmit() {
    if (this.employee.valid) {
      this.services.uploadEmployeeData(
        this.employee.value
      ).subscribe(
        response => {
          console.log('Employee data uploaded successfully', response);
          this.employee.reset();
          
          
           // Clear the form after successful submission
        },
        error => {
          console.error('Error uploading employee data', error);
        }
      );
    }
  }
  goBack(): void {
    // Navigate back to the employee list component
    this.router.navigate(['/get-employees']);
  }


}
