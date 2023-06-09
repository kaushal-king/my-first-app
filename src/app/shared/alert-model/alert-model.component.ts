

import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'app-alert-modal',
    templateUrl:'./alert-model.component.html',
    styleUrls:['./alert-model.component.css']
})

export class AlerModelComponent{
    @Input() error:string='';
    @Output() onClose=new EventEmitter<void>();


    onCloseClick(){
        this.onClose.emit()
    }
}
