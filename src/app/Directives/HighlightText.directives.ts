
import { Directive, ElementRef, OnInit } from "@angular/core";



@Directive({
    selector:'[appHighligghtText]'
})
export class HighlightTextDirectives implements OnInit{

    constructor(private element:ElementRef){}

    ngOnInit(): void {


            //native javascript use
     (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';



    }


}