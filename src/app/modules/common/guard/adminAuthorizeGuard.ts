import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { JwtService } from "../service/jwt.service";

@Injectable()
export class AdminAuthorizeGuard implements CanActivate{


    constructor(private jwtService: JwtService, private router: Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            let token = this.jwtService.getToken();
            if(!this.jwtService.isLoggedIn()){
                this.router.navigate(["/admin/login"]);
            }
            return true;
    }

}