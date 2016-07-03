import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login.component';
import { PrivateComponent } from './private.component';

export const routes: RouterConfig = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: PrivateComponent},
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
