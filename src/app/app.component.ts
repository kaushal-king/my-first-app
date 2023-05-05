import { Component, OnInit } from '@angular/core';
import { UserServices } from './services/user.services';
import { AuthService } from './services/auth.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {

 name="kaushal";
 title="my-first-app"
  users:{name:string; status:string}[]=[];

 constructor(private UserServices:UserServices,private AuthService:AuthService  ){}


  ngOnInit(): void {

    this.users=this.UserServices.user;
   
  }

  onLogin() {
    this.AuthService.login()

  }
  onLogout() {
    this.AuthService.logout()
  }


  
}


