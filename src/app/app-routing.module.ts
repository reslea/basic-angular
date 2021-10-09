import { RequirePermissionGuard } from './guards/require-permission.guard';
import { EnsureAdditionalAccessComponent } from './components/ensure-additional-access/ensure-additional-access.component';
import { RequireAuthGuard } from './guards/require-auth.guard';
import { MyFormComponent } from './components/my-form/my-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnsureLoginComponent } from './components/ensure-login/ensure-login.component';
import { Permission } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'ensure-login', pathMatch: 'full' },
  { path: 'login', component: MyFormComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'ensure-login', 
    component: EnsureLoginComponent, 
    canActivate: [RequireAuthGuard]
  },
  {
    path: 'ensure-additional-access',
    component: EnsureAdditionalAccessComponent,
    canActivate: [RequirePermissionGuard],
    data: { requiredPermissions: [Permission.AccessExtended] },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
