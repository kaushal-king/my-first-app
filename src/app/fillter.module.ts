import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FiltercustomepipePipe } from "./pipe/filtercustomepipe.pipe";
import { ShortenPipe } from "./pipe/shorten.pipe";
import { FillterPipesComponent } from "./pipe/fillter-pipes/fillter-pipes.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";


@NgModule({
    declarations:[
        FillterPipesComponent,
       
    ],
    imports:[
    
        SharedModule,
        RouterModule.forChild([
            {path:'pipe',component:FillterPipesComponent},
        ])
    ]
})
export class FillterModule{

}