import { Directive, ViewContainerRef } from "@angular/core";



@Directive({
    selector:'[appPlaceholder]'
})
export class PlaceHolderDirectives{
    constructor(public viewContainerRefrence:ViewContainerRef){
        
    }
}