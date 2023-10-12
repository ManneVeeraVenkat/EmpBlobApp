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

  public employee!: FormGroup;
  fileToUpload: File | null = null;
  employeeName: string = " ";

  constructor(private services: EmpBlobServiceService, private route: ActivatedRoute, private router: Router) { }

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
    });
  }
  handleFileInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }
  
  onSubmit(): void {
    if (this.employee.valid && this.fileToUpload) {
      // Create a FormData object to send both employee data and the file
      const formData = new FormData();
      formData.append('EmployeeId', this.employee.get('EmployeeId')?.value);
      formData.append('FirstName', this.employee.get('FirstName')?.value);
      formData.append('LastName', this.employee.get('LastName')?.value);
      formData.append('Desigination', this.employee.get('Desigination')?.value);
      formData.append('Department', this.employee.get('Department')?.value);
      formData.append('Location', this.employee.get('Location')?.value);
      formData.append('Skill', this.employee.get('Skill')?.value);
      formData.append('Salary', this.employee.get('Salary')?.value);
      formData.append('file', this.fileToUpload);

      this.services.uploadEmployeeDataWithProfile(formData).subscribe(
        response => {
          console.log('Employee data and profile picture uploaded successfully', response);
          this.employee.reset();
          // Clear the form after successful submission
        },
        error => {
          console.error('Error uploading employee data and profile picture', error);
        }
      );
    }
  }

  goBack(): void {
    // Navigate back to the employee list component
    this.router.navigate(['/get-employees']);
  }
  // public employee!: FormGroup
  // employeeName: string = " "

  // constructor(private services: EmpBlobServiceService ,private route: ActivatedRoute,
  //   private router: Router) { }

  // ngOnInit(): void {

  //   this.employee = new FormGroup({
     
  //     EmployeeId: new FormControl(),
  //     FirstName: new FormControl(),
  //     LastName: new FormControl(),
  //     Desigination: new FormControl(),
  //     Department: new FormControl(),
  //     Location: new FormControl(),
  //     Skill: new FormControl(),
  //     Salary: new FormControl(),


  //   })
  // }
  // onSubmit() {
  //   if (this.employee.valid) {
  //     this.services.uploadEmployeeData(
  //       this.employee.value
  //     ).subscribe(
  //       response => {
  //         console.log('Employee data uploaded successfully', response);
  //         this.employee.reset();
          
          
  //          // Clear the form after successful submission
  //       },
  //       error => {
  //         console.error('Error uploading employee data', error);
  //       }
  //     );
  //   }
  // }
  // goBack(): void {
  //   // Navigate back to the employee list component
  //   this.router.navigate(['/get-employees']);
  // }


}
