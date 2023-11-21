import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 

  transform(allemployee:any[],searchTearm:string,propName:string): any[] {
    if(!allemployee||searchTearm==''||propName==''){
      return allemployee
    }
    const result:any[]=[]
    allemployee.forEach((employ:any)=>{
      if(employ[propName].trim().toLowerCase().includes(searchTearm.trim().toLocaleLowerCase()))
       result.push(employ)
    })
    

    return result;
  }

}
