import { Component, OnInit } from '@angular/core';
import { EmpBlobServiceService } from 'src/services/emp-blob-service.service';
import { employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee-data',
  templateUrl: './update-employee-data.component.html',
  styleUrls: ['./update-employee-data.component.css']
})
export class UpdateEmployeeDataComponent implements OnInit {
  public updatemployee!: FormGroup
  employeeName: string | null = null;

  

  constructor(private service: EmpBlobServiceService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const employeeName= this.route.snapshot.paramMap.get('employeeName');

    this.updatemployee = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      Position: new FormControl(),
      Department: new FormControl(),
      Location: new FormControl(),
      City: new FormControl(),
      Skill: new FormControl(),
      Salary: new FormControl(),
    })
  }
  onSubmit() {
    if (this.updatemployee.valid) {
      const employeeName = this.updatemployee.value.employeeName;
      const UpdatedEmployeeData = this.updatemployee.value;

      this.service.updateEmployeeWithProfilePic(employeeName,UpdatedEmployeeData)
        .subscribe(
          response => {
            console.log('Employee data updated successfully', response);
            this.updatemployee.reset();

          },
          error => {
            console.error('Error updating employee data', error);
          }

        )
    }
  }

}
