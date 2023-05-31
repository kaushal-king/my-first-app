import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.services";

@Component({
    selector:'app-navigation',
    templateUrl:'./navtigation.component.html'
})
export class NavigationComponent implements OnInit {


    isAuthenticated:boolean=false;

    constructor(private authservice:AuthService){}
    ngOnInit(): void {
        this.authservice.userSub.subscribe(user=>{
                // console.log('user',user)
                this.isAuthenticated=user?true:false
        })
    }

    onLogoutr(event:Event){
        event.preventDefault();
        this.authservice.logout()
        
    }

    

}