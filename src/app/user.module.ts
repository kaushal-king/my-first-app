
import { NgModule } from '@angular/core'
import { EditUserComponent } from './routercomponent/edit-user/edit-user.component';

import { UsersrouterComponent } from './routercomponent/users/users.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UserrouterComponent } from './routercomponent/user/user.component';
import { UserRoutingModule } from './user.routing.module';
import { ShortenPipe } from './pipe/shorten.pipe';
import { SharedModule } from './shared.module';
import { DummyServices } from './services/dummy.services';

@NgModule({
    declarations: [
        EditUserComponent,
        UsersrouterComponent,
        UserrouterComponent,
      
      
    ],
    imports: [
        CommonModule,FormsModule,UserRoutingModule,SharedModule
        
      ],
    exports:[
        EditUserComponent,
        UsersrouterComponent,
        UserrouterComponent
    ]
})
export class UserModule{


}