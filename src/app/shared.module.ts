import { NgModule } from "@angular/core";
import { ShortenPipe } from "./pipe/shorten.pipe";
import { FiltercustomepipePipe } from "./pipe/filtercustomepipe.pipe";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
        ShortenPipe,
        FiltercustomepipePipe,
        
    ],
    imports:[
        CommonModule,
        FormsModule,
    ],
    exports:[
        ShortenPipe,
        FiltercustomepipePipe,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule{

}