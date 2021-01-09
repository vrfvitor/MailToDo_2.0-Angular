import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { SigninComponent } from './home/signin/signin.component';

import { TasksPageComponent } from './tasks/tasks-page/tasks-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: SigninComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: 'tasks', component: TasksPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }