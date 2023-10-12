import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpBlobServiceService {
  private apiUrl = 'https://localhost:7166/Employees'
 

  // upload call https://localhost:7166/Employees/addEmployee
  // getbyid call https://localhost:7166/Employees/employeeId?employeId=21157  https://localhost:7166/Employees/employeeId?employeId=21012
  //getall call https://localhost:7166/Employees/GetAllemployees
  // delete call https://localhost:7166/Employees/employeeId?employeeID=23432 https://localhost:7166/Employees/employeeId?employeeID=23218
  // update call https://localhost:7166/Employees/21157
  
   constructor(private http: HttpClient) { }

  // uploadEmployeeData(employee: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/addEmployee`, employee)

  // }
  uploadEmployeeDataWithProfile(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/uploadEmployeeWithProfilePic`, formData);
  }
  

  ViewEmployeeData(employeeId:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/employeeDetails?employeId=${employeeId}`)

  }
  GetEmployeeData(employeeId:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/employeeId?employeId=${employeeId}`)

  }
  updateEmployeeWithProfilePic(employeeId: number, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateEmployeeWithProfilePic/${employeeId}`, formData);
  }
  // UpdateEmployee(employeeId:number, employee:employee):Observable<any>{
  //   // const employeeName = `${employee.firstName} ${employee.lastName}`;

  // // Send the full name as part of the request URL
  // return this.http.put(`${this.apiUrl}/${employeeId}`, employee);
  // }

  getAllEmployees(): Observable<employee[]> {
    return this.http.get<employee[]>(`${this.apiUrl}/GetAllemployees`)
  }

  deleteEmployee(employeeId:number){
    return this.http.delete<employee>(`${this.apiUrl}/deleteEmployee?employeeId=${employeeId}`)
  }
 
}
