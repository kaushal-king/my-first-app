import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  submittted=false;
  gender='male';
  about='';
  user={
    username:'',
    email:'',
    gender:'',
    about:''
  }
  @ViewChild('f') signUpForm!:NgForm;


  //method passing argument
  // onformsubmit(f:NgForm){
  //   console.log(f)
  //   console.log(f.value)
  // }


  //view child method
  onformsubmit(){
    console.log(this.signUpForm)
    console.log(this.signUpForm.controls)
    this.submittted=true;

    this.user.username=this.signUpForm.value['userdata'].username;
    this.user.email=this.signUpForm.value['userdata'].email;
    this.user.gender=this.signUpForm.value.gender;
    this.user.about=this.signUpForm.value.about;

    console.log(this.user)


    this.signUpForm.reset()
    
  }

  checkdata(){
    // console.log(this.signUpForm.value)
  }


  fillValue(){
    this.signUpForm.form.patchValue({
      userdata:{
        email:'kaushal@gmial.com',
        username:'kaushal'
      },
      gender:'male'
    })
  }
}
                                                                                  