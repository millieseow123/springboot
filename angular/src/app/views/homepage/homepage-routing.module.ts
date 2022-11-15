import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard/home',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: '',
        },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
        },
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login',
        },
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
