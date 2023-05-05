import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingServices } from '../services/logging.services';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers:[LoggingServices],
})
export class AddUserComponent {
  userName='';
  @Output() userAdded=new EventEmitter<string>();
  @ViewChild('userInput') userInput!: ElementRef ;
  
 
  isUserCreated=false;

  constructor(private LoggingServices: LoggingServices ){}

  onUserAdded(){
    //  console.log("user is added "+this.userInput?.nativeElement.value)
    //  this.userAdded.emit(this.userInput?.nativeElement.value)
      console.log("user is added "+ this.userName)
      this.LoggingServices.logToConsole("user is added  "+this.userName)
     this.userAdded.emit(this.userName)
  }


  
  
}
