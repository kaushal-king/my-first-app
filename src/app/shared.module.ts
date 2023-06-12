import { NgModule } from "@angular/core";
import { ShortenPipe } from "./pipe/shorten.pipe";
import { FiltercustomepipePipe } from "./pipe/filtercustomepipe.pipe";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DummyServices } from "./services/dummy.services";



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
    ],
    providers:[
        DummyServices
      ],
})
export class SharedModule{

}