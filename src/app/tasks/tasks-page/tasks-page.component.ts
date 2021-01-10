import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TaskFormComponent } from './../task-form/task-form.component';
import { TaskService } from './../task/task.service';
import { Task } from './../task/task';
import { MessagesService } from '@core/messages.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@core/user/user';
import { UserService } from '@core/user/user.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {

  abs_fab = false;
  tasks: Task[];
  email: string;
  user: User;

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private messagesService: MessagesService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(usr => this.user = usr);
    this.taskService.read().subscribe(tasks => this.tasks = tasks);
  }

  openDialog(): void {
    this.abs_fab = true;

    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((resultTask: Task) => {
      setTimeout(() => this.abs_fab = false, 400);
      if (!resultTask) return;
      this.taskService.create(resultTask).subscribe(() => {
        this.messagesService.showMessage('Task created successfully')
        this.ngOnInit();
      });
    });

  }

  changed(): void {
    this.ngOnInit();
  }

}
