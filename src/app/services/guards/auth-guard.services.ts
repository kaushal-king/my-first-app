import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from '../auth.services';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardServices implements CanActivate , CanActivateChild{
    
constructor(private authService:AuthService, private router:Router ){}

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean| Promise<boolean>| Observable<boolean>  {


        //simple value base

    // let loggedIn= this.authService.isAuthenticated();
    // if(loggedIn){
  
    //     return true;
    // }else{
    //     this.router.navigate(['/'])
    //     return true;
    // }


    //ajax and any promice api call
 

    return this.authService.isAuthenticated2().then(data=>{
        if(data){
  
            return true;
        }else{
            this.router.navigate(['/'])
            return true;
        }
    })
    
 
    
}

canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean| Promise<boolean>| Observable<boolean> | any {

    return this.canActivate(route,state);
 
}


}               