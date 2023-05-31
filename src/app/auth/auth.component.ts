import { Component } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { Observable, retry } from "rxjs";
import { AuthService, authResponceData } from "../services/auth.services";
import { Router } from "@angular/router";


@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'

})
export class AuthComponent{

    isLoginMode=true;
    isLoading=false;
    error!:string;

    authObsevale!:Observable<authResponceData>
    

    constructor (private authservice:AuthService,private router:Router){}

    onSwitchMode(){
        this.isLoginMode=!this.isLoginMode
    }

    onFormSubmit(authform:NgForm){
        console.log(authform)

        if(!authform.valid){
            return
        }
        this.isLoading=true;
        if(this.isLoginMode){
            //perform login call
            this.authObsevale= this.authservice.login(authform.value.email,authform.value.password)
            this.isLoading=false;

        }else{
            //perform signup call
            this.authObsevale=this.authservice.signup(authform.value.email,authform.value.password)
        }


        this.authObsevale.subscribe(
            (Response)=>{
                console.log(Response)
                this.isLoading=false;
                this.error=''
                this.router.navigate(['/'])
            },
            error=>{
                console.log(error)
                this.isLoading=false;
                this.error=error;
                

            })
    }



    

    getPassowrdError(control:any){
        if(control.errors?.['required']){
            return 'password is Required'
        }
        if(control.errors?.['minlength']){
            return 'password shoud be 6 charater length'
        }
        return ''
    }
}