import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServices } from './services/user.services';
import { AuthService } from './services/auth.services';
import{userdataSercive} from './services/resolver/user-data.services'
import { Subscription } from 'rxjs';
import { DummyServices } from './services/dummy.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit,OnDestroy {

 name="kaushal";
 title="my-first-app"
  users:{name:string; status:string}[]=[];
  userAdded=false;

 constructor(private UserServices:UserServices,private AuthService:AuthService, private userdataSercive:userdataSercive ,private dummyservice:DummyServices){}


 userAddedSusbriction!:Subscription;


  ngOnInit(): void {

    this.users=this.UserServices.user;
    this.userAddedSusbriction=this.userdataSercive.userAddedEvent.subscribe(data=>{
      console.log('call'+data)
      this.userAdded=data
    })  
    this.AuthService.autoLogin()

    this.dummyservice.printlog('hello from appcomponent')
   
  }

  ngOnDestroy(): void {
   this.userAddedSusbriction.unsubscribe();
  }


  onLogin() {
    // this.AuthService.login()

  }
  onLogout() {
    this.AuthService.logout()
  }


  
}


