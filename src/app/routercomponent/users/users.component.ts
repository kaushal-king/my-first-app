import { Component } from '@angular/core';
import{userdataSercive} from '../../services/resolver/user-data.services'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersrouterComponent {

  constructor(private userdataSercive:userdataSercive){}

  onUserAddedClick(){
   this.userdataSercive.addUser();
  }

}
