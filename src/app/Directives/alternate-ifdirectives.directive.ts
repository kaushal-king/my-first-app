import { Directive, Input, OnInit , TemplateRef, ViewContainerRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAlternateIfdirectives]'
})

export class AlternateIfdirectivesDirective implements OnInit,OnChanges {
  @Input() set appAlternateIfdirectives(condition:boolean){
    if(condition){
      this.vcRef.createEmbeddedView(this.templateRef)
     }else{
      this.vcRef.clear();
     }
  }




  constructor(private templateRef:TemplateRef<any>,
              private vcRef:ViewContainerRef  
              ) {

               }


  ngOnInit(): void {
   
  }



  ngOnChanges(): void {
    // if(this.appAlternateIfdirectives){
    //   this.vcRef.createEmbeddedView(this.templateRef)
    //  }else{
    //   this.vcRef.clear();
    //  }
  }







}
