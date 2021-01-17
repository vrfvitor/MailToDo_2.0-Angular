import { TaskService } from './../task/task.service';
import { Component, Input, Output } from '@angular/core';
import { Task } from '../task/task';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MessagesService } from '@core/messages.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent {

  @Input() title: string;
  @Input() tasks: Task[];
  @Output() warnChange = new EventEmitter();

  constructor(
    private service: TaskService,
    public dialog: MatDialog,
    private messagesService: MessagesService
  ) { }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      this.messagesService.showMessage('Task deleted successfully.')
      this.warnChange.emit('');
    });
  }

  update(id: number) {
    this.service.readById(id).subscribe(task => {
      const dialogRef = this.dialog.open(TaskFormComponent, {
        width: '450px',
        data: {
          id: task.id,
          title: task.title,
          description: task.description,
          priority: task.priority
        }
      });

      dialogRef.afterClosed().subscribe((resultTask: Task) => {
        if (!resultTask) return;
        this.service.update(resultTask).subscribe(() => {
          this.messagesService.showMessage('Task updated successfully')
          this.warnChange.emit('');
        });
      });
    });
  }

  setDone(id: number, done: boolean = true) {
    this.service.setDone(id, done).subscribe(() => {
      this.messagesService.showMessage('Task set as ' + (done ? 'done!' : 'undone!'))
      this.warnChange.emit('');
    });
  }

}
