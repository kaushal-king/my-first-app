import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "../auth/user.module";
import { Router } from "@angular/router";


export interface authResponceData{
    idToken	:string;	
    email	:string	;
    refreshToken:	string	;
    expiresIn:	string	;
    localId:	string;
    registered?: boolean
}

@Injectable({
    providedIn:'root'
})
export class AuthService{

    isLoggedIn=false;
    userSub=new BehaviorSubject<User|any>(null);
    clearTimeout:any
    constructor(private http:HttpClient,private router:Router){}

    signup(email:string,password:string){
        return  this.http.post<authResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcsxozQIRtagOekJlEzAFsgI3tuZFyO80',{
            email,password,returnSecureToken:true
        }).pipe(catchError(this.getErrorHandlear), tap(this.handleUser.bind(this)))
    }


    login(email:string,password:string){
       return  this.http.post<authResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcsxozQIRtagOekJlEzAFsgI3tuZFyO80',
        {
            email,password,returnSecureToken:true
        }).pipe(catchError(this.getErrorHandlear), tap(this.handleUser.bind(this)))
        // this.isLoggedIn=true;
    }


    private handleUser(Response:authResponceData){
  
            const expiredata=new Date(new Date().getTime()+ Number.parseInt(Response.expiresIn) *1000)
            const user=new User(Response.email,Response.localId,Response.idToken,expiredata)
            this.userSub.next(user);
            localStorage.setItem('userData', JSON.stringify(user) )
            this.autoLogout(+Response.expiresIn*1000)
        
    }

    autoLogin(){
        let userdata:{email:string,localId:string,_token:string,expirationDate:Date}  =  JSON.parse( localStorage.getItem('userData')!!)
        if(!userdata){
            return
        }
            let user=new User(userdata.email,userdata.localId,userdata._token, new Date(userdata.expirationDate))

            if(user.token){
                this.userSub.next(user);
            }
            let date=new Date().getTime()
            let expirationDate=new Date(userdata.expirationDate).getTime()

            this.autoLogout(expirationDate-date)
    }

    getErrorHandlear(errorResponce:HttpErrorResponse){
        let error='erroe occured'
        if(!errorResponce.error || !errorResponce.error.error){
          return throwError(error)  
        }
            switch(errorResponce.error.error.message){
                case 'EMAIL_NOT_FOUND':    
                        error='Email is not found'
                        break;
                case 'INVALID_PASSWORD':    
                        error='password not match'
                        break;
                case 'USER_DISABLED':    
                        error='user is disable';
                        break;
                case 'EMAIL_EXISTS':    
                        error='Email is already exists';
            }
            return throwError(error)
    }


    autoLogout(expirationDate:number){
        console.log(expirationDate);
        
       this.clearTimeout= setTimeout(() => {
            this.logout()
        }, expirationDate);
    }

    logout(){
       this.userSub.next(null)
       this.router.navigate(['/auth']);
       localStorage.removeItem('userData')
       if(this.clearTimeout){
        clearTimeout(this.clearTimeout)
       }
    }

    isAuthenticated(){
        return this.isLoggedIn;
    }


    isAuthenticated2(){
      return  new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(this.isLoggedIn)
            }, 1000);
        })
    }
}       