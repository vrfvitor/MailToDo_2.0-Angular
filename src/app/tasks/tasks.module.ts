import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { TaskComponent } from './task/task.component';
import { FilterByDonePipe } from './tasks-page/filter-by-done.pipe';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { AngularMaterialModule } from './../ng-material.module';
import { TaskContainerComponent } from './task-container/task-container.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskContainerComponent,
    FilterByDonePipe,
    TasksPageComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AngularMaterialModule,
  ],
  exports: [TasksPageComponent]
})
export class TasksModule { }
