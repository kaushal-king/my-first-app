import { Component, OnInit } from '@angular/core';
import{userdataSercive} from '../../services/resolver/user-data.services'
import { DummyServices } from 'src/app/services/dummy.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersrouterComponent implements OnInit {

  constructor(private userdataSercive:userdataSercive,private dummyservice:DummyServices){}
  ngOnInit(): void {
  this.dummyservice.printlog('hello from user module')
  }

  userData=['Rama','krishna','leela'];

  onUserAddedClick(){
   this.userdataSercive.addUser();
  }

}
