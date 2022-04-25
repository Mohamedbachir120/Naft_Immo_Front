import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { TokenStorageService } from "../_services/token-storage.service";

@Injectable({providedIn: "root"})
export class LoginActivate implements CanActivate {
  constructor(private token: TokenStorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.token.isAuthenticated()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}