import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit{

  allemployee:any=[];
  searchKey:any=[];

  empyId:string=""

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllEmp()
    
  }

  getAllEmp(){
    this.api.getEmployee().subscribe((data:any)=>{
      console.log(data);
      this.allemployee=data
      console.log(data.id);
      
      this.empyId=data.id
      
      
    })

  }

  search(event:any){
    console.log(event);
    console.log(event.target.value);
    this.searchKey=event.target.value
    
    
  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((result:any)=>{
      alert("Delete successfully")
      this.getAllEmp()
    })
  }

}
