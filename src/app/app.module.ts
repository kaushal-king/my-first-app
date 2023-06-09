import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent} from './user/user.component';
import { UsersComponent } from './users/users.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { FillterPipesComponent } from './pipe/fillter-pipes/fillter-pipes.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { FiltercustomepipePipe } from './pipe/filtercustomepipe.pipe';
import { PostComponent } from './http/post/post.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { AuthInterceptorService } from './services/auth-interceptor';
import { AuthTokenInterseportService } from './services/auth-token-interseptor';
import { LogginInterceptor } from './services/loggin-interseptor';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinner } from './shared/loading-spinner/loading-spinner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlerModelComponent } from './shared/alert-model/alert-model.component';
import { PlaceHolderDirectives } from './shared/placeholder.directive/placeholder.directives';
import { UserModule } from './user.module';
import { PostModule } from './post.module';
import { AuthModule } from './auth.module';
import { FillterModule } from './fillter.module';



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
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    

   
    NavigationComponent,
    AlerModelComponent,
    PlaceHolderDirectives
  ],
  imports: [
    BrowserModule,  FormsModule,UserModule,FillterModule, AuthModule ,PostModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule
    
  ],

  providers: [UserServices,LoggingServices,AuthService,AuthGuardServices,DeactivateGuardServicer,UserResolver,userdataSercive,
              {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
              {provide:HTTP_INTERCEPTORS,useClass:LogginInterceptor,multi:true},
              {provide:HTTP_INTERCEPTORS,useClass:AuthTokenInterseportService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
                                                                                                    