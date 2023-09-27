import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpBlobServiceService {
  private apiUrl = 'https://localhost:7058/api/Blob'
  // upload api call https://localhost:7058/api/Blob/addEmployee
  //get all employees https://localhost:7058/api/Blob/getEmployees
  // delete https://localhost:7058/api/Blob/deleteEmployee/veera

  // update api call https://localhost:7058/api/Blob/UpdateEmployeeFromAllContainers/veera
 //                  https://localhost:7058/api/Blob/UpdateEmployeeFromAllContainers/veera
   constructor(private http: HttpClient) { }

  uploadEmployeeData(employee: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addEmployee`, employee)

  }

  ViewEmployeeData(employeeName:string):Observable<employee>{
    return this.http.get<employee>(`${this.apiUrl}/getEmployee/${employeeName}`)
  }
 
  UpdateEmployee(employeeName:string, employee:employee):Observable<any>{
    // const employeeName = `${employee.firstName} ${employee.lastName}`;

  // Send the full name as part of the request URL
  return this.http.put(`${this.apiUrl}/updateEmployee/${employeeName}`, employee);
  }

  getAllEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}/getEmployeesFromContainer`)
  }

  deleteEmployee(employeeName:string){
    return this.http.delete<employee>(`${this.apiUrl}/deleteEmployee/${employeeName}`)
  }
  getContainers(): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}/containers`)
  }
  
}
