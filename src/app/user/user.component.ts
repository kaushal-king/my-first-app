import { Component, ContentChild, Input,ElementRef ,AfterContentInit } from "@angular/core";

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

export class UserComponent implements AfterContentInit  {
    userId=10;
    userStatus='offline';
    @Input('user') user="";
    @ContentChild('userParagraph') userParagraph : ElementRef | undefined  ;

    constructor(){
        this.userStatus= Math.random() > 0.5 ?'online':'offline';
    }
    ngAfterContentInit(): void {
     //   console.log('content init calll')
      //  console.log(this.userParagraph?.nativeElement.textContent )
    
    }


    ngOnInit():void{
      //  console.log(this.userParagraph)
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