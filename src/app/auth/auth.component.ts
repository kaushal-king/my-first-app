import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { Observable, Subscription, retry } from "rxjs";
import { AuthService, authResponceData } from "../services/auth.services";
import { Router } from "@angular/router";
import { AlerModelComponent } from "../shared/alert-model/alert-model.component";
import { PlaceHolderDirectives } from "../shared/placeholder.directive/placeholder.directives";
import { compileNgModule } from "@angular/compiler";


@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'

})
export class AuthComponent implements OnDestroy {

    isLoginMode=true;
    isLoading=false;
    error!:string;
    closesub!:Subscription;
    @ViewChild(PlaceHolderDirectives) alertHost!:PlaceHolderDirectives;

    authObsevale!:Observable<authResponceData>
    

    constructor (private authservice:AuthService,private router:Router,private componentFactoryResolver:ComponentFactoryResolver){}
    ngOnDestroy(): void {
        if(this.closesub){
            this.closesub.unsubscribe()
        }
      
    }

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
                this.showErrorAlert(error)
                

            })
    }


    showErrorAlert(error: any) {
        const componetfactory=this.componentFactoryResolver.resolveComponentFactory(AlerModelComponent)
        this.alertHost.viewContainerRefrence.clear()
        const componentref=this.alertHost.viewContainerRefrence.createComponent(componetfactory)
        componentref.instance.error=error;
         this.closesub= componentref.instance.onClose.subscribe(()=>{
            this.closesub.unsubscribe()
            this.alertHost.viewContainerRefrence.clear()
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