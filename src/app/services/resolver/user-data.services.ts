import { EventEmitter } from "@angular/core"
import { Subject } from "rxjs";

export class userdataSercive{


    userAddedEvent=new Subject<boolean>();

    getUser(id:string){
        if(id==='1'){
            return{
                id:'1',
                name:'kaushal'
            }
        }else{
            return{
                id:'2',
                name:'vivek'
            }
        }
    }


    addUser(){
        this.userAddedEvent.next(true);
    }

}