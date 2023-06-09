import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filtercustomepipe',
  pure:false
})
export class FiltercustomepipePipe implements PipeTransform {




  

  transform(value: any,filterstring:string) {

   
    if (value.length===0 || filterstring===''){
      return value
    }
    
    const users=[]

    for(const user of value){
   
      if (user['name']===filterstring){
      
        users.push(user)
      }
    }
      
    return users
  }

}
