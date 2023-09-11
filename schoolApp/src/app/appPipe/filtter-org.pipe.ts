import { Pipe, PipeTransform } from '@angular/core';
import { Organization } from '../model/organizationData';

@Pipe({
  name:  'filtterOrg'
})
export class FiltterOrgPipe implements PipeTransform {

  transform(result: any, searchTerm: any): any {
    console.log(result);
    
    if(result.length === 0){
     return result
    }
    else{
    return result.filter(function(result:any) {      
       return result.organizationName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 
       
    }) ; }
  }

}
