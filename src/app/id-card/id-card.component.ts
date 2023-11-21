import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IdCardComponent implements OnInit{

  employeeID:string=''
  employeeD:any=[]

  constructor(private activeEoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    // to get the ID
    this.activeEoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.id);
      this.employeeID=data.id;

      //to get the details
    this.api.viewEmployeeDetails(this.employeeID).subscribe((result:any)=>{
      console.log(result);
      this.employeeD=result;
    })
      
      
    })
    
  }

}
