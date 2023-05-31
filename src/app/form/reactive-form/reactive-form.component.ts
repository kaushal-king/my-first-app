import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  signupForm!: FormGroup; 
  genders=['male','female']
  restrictedNames=['kaushal']
                                                
                                                                                     
      

  get hobbycontorls(){
     return (<FormArray>this.signupForm.get('hobbies'))?.controls
  }                           

  
  
  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'userdata':new FormGroup({
        'username':new FormControl(null,[Validators.required, this.isRestrictedNames.bind(this) ]),
        'email':new FormControl(null,[Validators.required,Validators.email],this.isRestrictedEmial),
      }),                    
      'gender':new FormControl('female'),
      'hobbies':new FormArray([])
    })
                                                                                  
    // this.signupForm.valueChanges.subscribe(value=>{
    //   console.log(value)
    // })

    // this.signupForm.statusChanges.subscribe(value=>{
    //   console.log(value)
    // })

    this.signupForm.setValue({
      userdata:{
        username:'lll',
        email:'kaushal@js'
      },
      gender:'male',
      hobbies:[]
    })


    // this.signupForm.patchValue({
    //   userdata:{
    //     username:'lll'
    //   },
    //   gender:'male',
    //   hobbies:[]
    // })


  };

  
  

  onSubmit() {
   console.log(this.signupForm)
   this.signupForm.reset();
    }

    onAddHoby() {
      const contorl= new FormControl(null,[Validators.required]);


      (<FormArray>this.signupForm.get('hobbies')).push(contorl);
      
       }


       isRestrictedNames(control:FormControl):{[s:string]:boolean}|null{

        // console.log(control.value)
        if(this.restrictedNames.includes(control.value)){
            return {nameIsRestricted:true};
        }
        return null;
       }     


       isRestrictedEmial(control:AbstractControl):Promise<any>| Observable<any> {
        let promise=new Promise((resolve,reject)=>{
          setTimeout(() => {
          if(control.value=="test@test.com"){
                resolve({emailIsResritced:true});
          }else{
            resolve(null);
          }
          }, 2000);
        })
        return promise

       }
  

}
