import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './home/signin/signin.component';

import { TasksPageComponent } from './tasks/tasks-page/tasks-page.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'tasks', component: TasksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }