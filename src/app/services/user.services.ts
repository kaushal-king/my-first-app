import { EventEmitter, Injectable } from "@angular/core";
import { LoggingServices } from './logging.services';

@Injectable()
export class UserServices{


    constructor (private LoggingServices:LoggingServices){}

    statusUpdated=new EventEmitter<string>();

    user=[
        {name:'kaushal',status:'Active'},
        {name:'vatsal',status:'Active'},
        {name:'priyansh',status:'Active'},
        {name:'vivek',status:'Active'},
    ];

    addUser(name:string,status:string){
        this.user.push({name,status});
        this.LoggingServices.logToConsole(JSON.stringify(this.user).toString())
    
      }


      

      updateStatus(id:number,status:string){
            this.user[id].status=status;
            this.statusUpdated.emit(status);  //it is return observable so .suscrible use in another file where it call 
            this.LoggingServices.logToConsole(JSON.stringify(this.user).toString())
      }

      deleteUser(id:number){
        if(id!==-1){
            this.user.splice(id,1)
        }
        
  }

}