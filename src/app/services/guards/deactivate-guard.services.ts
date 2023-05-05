
import{ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs'


export interface IDeactivateGuard{
    canExit:()=>boolean| Promise<boolean>| Observable<boolean> 
}

export class DeactivateGuardServicer  implements CanDeactivate<IDeactivateGuard> {

    canDeactivate(component:IDeactivateGuard,route:ActivatedRouteSnapshot,state:RouterStateSnapshot,nextState:RouterStateSnapshot) :boolean| Promise<boolean>| Observable<boolean>
    {
        return component.canExit();
    }

}