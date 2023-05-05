import { Component,Input } from '@angular/core';
import { UserServices } from '../services/user.services';

@Component({
  selector: 'app-users-list-services',
  templateUrl: './users-list-services.component.html',
  styleUrls: ['./users-list-services.component.css'],

})
export class UsersListServicesComponent {


  username:string='';

  @Input() user:{name:string,status:string}={
    name: '',
    status: ''
  };

  @Input() id:number | undefined;

  constructor(private UserServices:UserServices){}
  

  onUpdateStatus(status: string) {
    this.UserServices.updateStatus(this.id as number,status)
    

  }

  onDeleteUser() {
    this.UserServices.deleteUser(this.id as number)

  }
}
