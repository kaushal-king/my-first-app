import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent} from './user/user.component';
import { UsersComponent } from './users/users.component'

import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { HighlightTextDirectives } from './Directives/HighlightText.directives';
import { RenderHighlighightDirective } from './Directives/render-highlighight.directive';
import { AlternateIfdirectivesDirective } from './Directives/alternate-ifdirectives.directive';
import { UsersListServicesComponent } from './users-list-services/users-list-services.component';
import { AddUserForServicesComponent } from './add-user-for-services/add-user-for-services.component';

import { LoggingServices } from './services/logging.services';
import { UserServices } from './services/user.services';

import { CategoryComponent } from './routercomponent/category/category.component';
import { HomeComponent } from './routercomponent/home/home.component';
import { UserrouterComponent } from './routercomponent/user/user.component';
import { UsersrouterComponent } from './routercomponent/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './routercomponent/edit-user/edit-user.component';
import { PageNotFoundComponent } from './routercomponent/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.services';
import { AuthGuardServices } from './services/guards/auth-guard.services';
import { DeactivateGuardServicer } from './services/guards/deactivate-guard.services';
import { UserResolver } from './services/resolver/user-resolver.services';
import { userdataSercive } from './services/resolver/user-data.services';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent,
    HighlightTextDirectives,
    RenderHighlighightDirective,
    AlternateIfdirectivesDirective,
    UsersListServicesComponent,
    AddUserForServicesComponent,
    CategoryComponent,
    HomeComponent,
    UserrouterComponent,
    UsersrouterComponent,
    EditUserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,  FormsModule,AppRoutingModule
    
  ],

  providers: [UserServices,LoggingServices,AuthService,AuthGuardServices,DeactivateGuardServicer,UserResolver,userdataSercive],
  bootstrap: [AppComponent]
})
export class AppModule { }
