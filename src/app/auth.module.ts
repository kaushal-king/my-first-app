import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { LoadingSpinner } from "./shared/loading-spinner/loading-spinner.component";



@NgModule({
    declarations:[
        AuthComponent,
        LoadingSpinner,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([    {path:'auth',component:AuthComponent}])
    ]
})
export class AuthModule{

}