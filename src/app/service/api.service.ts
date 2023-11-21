import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myEmployees } from 'src/model/myEmployees';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //get all employee details
  getEmployee():Observable<myEmployees>{
    return this.http.get('http://localhost:3000/employees')
  }

  viewEmployeeDetails(empId:string){
    return this.http.get(`http://localhost:3000/employees/${empId}`)
    
  }
  viewdepartmentDetails(dpmtId:string){
    return this.http.get(`http://localhost:3000/Department/${dpmtId}`)
  }
  viewGender(genderId:string){
    return this.http.get(`http://localhost:3000/gender/${genderId}`)
  }
  // api call for add employees
  addemployee(empBody:any){
    return this.http.post(`http://localhost:3000/employees/`,empBody)
  }

  //api call for get gender details
  getGender(){
    return this.http.get('http://localhost:3000/gender')
  }
  getAllDpmt(){
    return this.http.get('http://localhost:3000/Department')
  }
  //api call for a particular dcontact
  deleteContact(contactId:any){
    return this.http.delete(`http://localhost:3000/employees/${contactId}`)
  }

  //update
  updateEmp(empID:any,empBody:any){
    return this.http.put(`http://localhost:3000/employees/${empID}`,empBody)


  }

}
