import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {AuthGuard} from 'src/app/guards/auth.guard'

const routes: Routes = [


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./pages/loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./pages/add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'update-task',
    loadChildren: () => import('./pages/update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
