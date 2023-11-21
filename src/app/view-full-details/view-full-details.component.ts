import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-full-details',
  templateUrl: './view-full-details.component.html',
  styleUrls: ['./view-full-details.component.css']
})


export class ViewFullDetailsComponent implements OnInit{
  //employee details
  employees:any=[]
  empId:string=""
//department details
  dpmtId:string=""
  dpmtName:string=""
  //gender
 genderId:string=''
 genderName:string=''

  constructor(private activeRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {

    //to get the id
    this.activeRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      
      this.empId=data.id
      
//to get all contacts
      this.api.viewEmployeeDetails(this.empId).subscribe((result:any)=>{
        console.log(result);
        this.employees=result

//to get department details
        this.dpmtId=result.departmentid
        this.api.viewdepartmentDetails(this.dpmtId).subscribe((data:any)=>{
          this.dpmtName=data.dept


//to get gender details
        this.genderId=result.gender
        this.api.viewGender(this.genderId).subscribe((gen:any)=>{
          this.genderName=gen.name

        })

        })
        
      })
    })
    
  }


}
