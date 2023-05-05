import { Component, OnInit } from '@angular/core';
import { UserServices } from '../services/user.services';


@Component({
  selector: 'app-add-user-for-services',
  templateUrl: './add-user-for-services.component.html',
  styleUrls: ['./add-user-for-services.component.css'],
 
})
export class AddUserForServicesComponent implements OnInit {

  username:string='';


  constructor(private UserServices:UserServices ){}

  ngOnInit(): void {
     this.UserServices.statusUpdated.subscribe(data=>{
      alert(data)
     })
  }



  onAddUser() {
     console.log('add')
    this.UserServices.addUser(this.username,"active")
    
    }
}
