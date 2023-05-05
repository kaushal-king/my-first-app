import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import{ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs'
import {userdataSercive} from './user-data.services';

export interface user{
    id:string;
    name:string;
}

@Injectable()
export class UserResolver implements Resolve<user>{

    // resolve use to sent dyanamically data into any route navigation 
    // for using dynamic api call use resolve and then access data into router


    constructor (private userdataSercive : userdataSercive ){}

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): user | Observable<user> | Promise<user>{
            let id = route.params['id'];
            let details=this.userdataSercive.getUser(id);
            console.log("jjj"+details)
            return details;
    }

}