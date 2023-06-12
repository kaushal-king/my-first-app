import { NgModule } from "@angular/core";
import { UserServices } from "./services/user.services";
import { AuthService } from "./services/auth.services";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./services/auth-interceptor";
import { LogginInterceptor } from "./services/loggin-interseptor";
import { AuthTokenInterseportService } from "./services/auth-token-interseptor";
import { userdataSercive } from "./services/resolver/user-data.services";
import { UserResolver } from "./services/resolver/user-resolver.services";
import { DeactivateGuardServicer } from "./services/guards/deactivate-guard.services";
import { AuthGuardServices } from "./services/guards/auth-guard.services";
import { LoggingServices } from "./services/logging.services";
import { DummyServices } from "./services/dummy.services";

@NgModule({
    providers: [UserServices,LoggingServices,AuthService,AuthGuardServices,DeactivateGuardServicer,UserResolver,userdataSercive,
        {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
        {provide:HTTP_INTERCEPTORS,useClass:LogginInterceptor,multi:true},
        {provide:HTTP_INTERCEPTORS,useClass:AuthTokenInterseportService,multi:true},
],
})
export class CoreModule{

}