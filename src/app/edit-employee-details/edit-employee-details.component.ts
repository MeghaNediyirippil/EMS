import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { myEmployees } from 'src/model/myEmployees';
import { Department } from 'src/model/Department';
import { Gender } from 'src/model/Gender';

@Component({
  selector: 'app-edit-employee-details',
  templateUrl: './edit-employee-details.component.html',
  styleUrls: ['./edit-employee-details.component.css']
})
export class EditEmployeeDetailsComponent implements OnInit{

  empID:string=''
  emp:myEmployees={}
  dptDetails:Department[]=[]
  genDetail:Gender[]=[]
  
  

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){
      
  }

  ngOnInit(): void {

    


    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      this.empID=data.id;
      //call api for particular contact details
      this.api.viewEmployeeDetails(this.empID).subscribe((result:any)=>{
        console.log(result);
        this.emp=result

      //call api for getting department
      this.api.getAllDpmt().subscribe((data:any)=>{
        console.log(data);
       
        this.dptDetails=data

      //call api for getting gender details
      this.api.getGender().subscribe((res:any)=>{
        console.log(res);
        this.genDetail=res

        
      })
      

        
      })
        
      })
      
    })
    
    }
    updateEmp(){
      this.api.updateEmp(this.empID,this.emp).subscribe((edit:any)=>{
        console.log(edit);
        this.route.navigateByUrl('/mainComponent/viewEmployeeDetails')
        
      })

    
  }



}
