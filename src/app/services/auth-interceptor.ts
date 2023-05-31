
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable, tap } from 'rxjs'



export class AuthInterceptorService implements HttpInterceptor {



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

            
            console.log('in request interseprtor ',req);
            let modifiyRequest=req.clone({
                // headers:req.headers.append('auth','interceptor')
            })

            return next.handle(modifiyRequest)
    }

    
}