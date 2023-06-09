import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersrouterComponent } from "./routercomponent/users/users.component";
import { UserrouterComponent } from "./routercomponent/user/user.component";
import { AuthGuardUrl } from "./services/guards/auth-guard";
import { UserResolver } from "./services/resolver/user-resolver.services";
import { DeactivateGuardServicer } from "./services/guards/deactivate-guard.services";
import { EditUserComponent } from "./routercomponent/edit-user/edit-user.component";

const userRoute:Routes=[ {path:'users',component:UsersrouterComponent,
  
canActivate:[AuthGuardUrl],   // allow parent but not child
// canActivate:[AuthGuardServices],  //parent guard 
children:[
  {path:':id/:name',component:UserrouterComponent},
  {path:':id/:name/edit',component:EditUserComponent,
   canDeactivate:[DeactivateGuardServicer],
   resolve:{user:UserResolver},   //implement resolve service name here so you get dynamic data
  },
]},]

@NgModule({

    imports:[RouterModule.forChild(userRoute)],
    exports:[RouterModule]
})       
export class UserRoutingModule{

}