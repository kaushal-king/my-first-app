import { Input } from '@angular/core';
import { Component } from '@angular/core';
import {LoggingServices} from '../services/logging.services'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation:ViewEncapsulation.None
  providers:[LoggingServices],
})
export class UsersComponent  {

  
  isUserCreated=false;
  users:string[]=[];
  isAvailable:boolean=false;
  vlaue =10;



  constructor(private LoggingServices: LoggingServices ){}
  
  onUserAdded(event:string){
    this.users.push(event)

  }

  onNameChange(){
    console.log('name change')
    // let loggingServices=new LoggingServices();
      this.LoggingServices.logToConsole('name change')
  }

  onUserDelete(){
    this.users=[]
  }



  // onUpdateUser(event: Event){
  //    console.log((event.target as HTMLInputElement ).value)
  //   this.userName=(event.target as HTMLInputElement ).value;
  // }
}
