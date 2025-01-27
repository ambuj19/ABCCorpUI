import { Routes } from '@angular/router';
import { AuthCallbackComponent } from '../auth/auth-callback/auth-callback.component';
import { AuthGuardService } from '../auth/services';
import { HomeComponent } from './feature/components/home/home.component';
import { LoginComponent } from './feature/components/login/login.component';

export const routes: Routes = [
   
    { path: 'response-oidc', component: AuthCallbackComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    {path:'', component:LoginComponent},
];
