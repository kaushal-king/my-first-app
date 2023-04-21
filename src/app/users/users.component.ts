import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  allowNewUser=false;

  userName='';
  isUserCreated=false;
  users=['user 1','user 2']

  constructor(){
    setTimeout(() => {
      this.allowNewUser=true;
   
    }, 3000);
  }

  changeUsercreatedStatus(){

    this.isUserCreated=true;
    this.users.push(this.userName)

  }

  onUpdateUser(event: Event){
     console.log((event.target as HTMLInputElement ).value)
    this.userName=(event.target as HTMLInputElement ).value;
  }
}
