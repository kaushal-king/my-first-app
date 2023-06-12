import { Injectable } from "@angular/core";



export class DummyServices{
    logmessage!:String

    printlog(message:string){
        console.log(message)
        console.log(this.logmessage);
        this.logmessage=message
        
    }

}