
import{CanActivate,ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router'
import { Observable, map, take, tap } from "rxjs";
import { AuthService } from '../auth.services';
import { Injectable } from "@angular/core";
import { UrlTree } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class AuthGuardUrl implements CanActivate{


    constructor(private authService:AuthService, private router:Router ){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean|UrlTree| Promise<boolean|UrlTree>| Observable<boolean|UrlTree>  {

        return this.authService.userSub.pipe(take(1),map(user=>{
            if(!user){
                return this.router.createUrlTree(['/auth'])
            }
            return true
        }))
    }
    //     return this.authService.userSub.pipe(map(user=>{
    //         return user?true:false;
    //     }),tap(auth=>{
    //         if(!auth){
    //             this.router.navigate(['/auth'])
    //         }
      
    //     })
    //     )
    // }
}