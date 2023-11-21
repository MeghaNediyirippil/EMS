import { Component, OnInit } from '@angular/core';
import { myEmployees } from 'src/model/myEmployees';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employeeDetail:myEmployees={}
  

  getGender:any=[] //to hold gender information

  alldpmt:any=[]

  

  constructor(private api:ApiService,private router:Router){
    this.employeeDetail.gender="Select A Group";
    this.employeeDetail.departmentid="Select Department";
    
  }
  ngOnInit(): void {
    this.api.getGender().subscribe((data:any)=>{
      console.log(data);
      this.getGender=data

      this.api.getAllDpmt().subscribe((datas:any)=>{
        console.log(datas);
        this.alldpmt=datas
        
      })

    
    })
  }

  addEmp(){
    this.api.addemployee(this.employeeDetail).subscribe((result:any)=>{
      this.router.navigateByUrl('')
    })
  }

}
