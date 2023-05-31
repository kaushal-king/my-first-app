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

    logout(){
       this.userSub.next(null)
       this.router.navigate(['/auth']);
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