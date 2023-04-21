import { Component } from "@angular/core";

@Component({
   selector:'app-user',
   templateUrl:'./user.component.html',
   styles:[
    `
    .offline{
        color:white;
    } `
   ]
})

export class UserComponent{
    userId=10;
    userStatus='offline';

    constructor(){
        this.userStatus= Math.random() > 0.5 ?'online':'offline';
    }

    getUserStatus(){
        return this.userStatus
    }
    getColor(){
        if(this.userStatus==='online')
            return 'green'
        else
            return 'red'
    }

}