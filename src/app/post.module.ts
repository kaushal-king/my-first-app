import { NgModule } from "@angular/core";
import { PostComponent } from "./http/post/post.component";
import { RouterModule } from "@angular/router";
import { AuthGuardUrl } from "./services/guards/auth-guard";
import { CommonModule } from "@angular/common";
import {  ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[PostComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path:'post',component:PostComponent,canActivate:[AuthGuardUrl]},
        ])
    ]
})
export class PostModule{

}