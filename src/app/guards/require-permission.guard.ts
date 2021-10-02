import { AuthService, Permission } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequirePermissionGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const requiredPermissions = next.data.requiredPermissions as Permission[];
    const tokenData = this.authService.tokenData$.value;

    if(!tokenData) return false;
    
    if(!requiredPermissions || requiredPermissions.length === 0) {
      throw new Error('please pass non-empty "requiredPermissions" param to route or use require-auth.guard instead');
    }

    return requiredPermissions.every(p => tokenData.permissions.includes(p));
  }
}
