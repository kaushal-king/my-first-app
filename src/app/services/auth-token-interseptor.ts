import{HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable, exhaustMap, pipe, take } from 'rxjs';
import {AuthService} from './auth.services'
import { Injectable } from '@angular/core';


@Injectable()
export class AuthTokenInterseportService implements HttpInterceptor {

    constructor(private authservice:AuthService ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       

        return this.authservice.userSub.pipe(take(1),exhaustMap(user=>{
            if(!user){
                return next.handle(req)
            }
            let modifiyRequest=req.clone({
                params:req.params.append('auth',user.token)
            })
           return next.handle(modifiyRequest)
        }))
        
      
   
    }

}