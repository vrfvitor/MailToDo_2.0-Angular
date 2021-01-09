import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Task } from './task';
import { TokenService } from '@core/token/token.service';
import { API_URL } from 'app/contants';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_URI = `${API_URL}/tasks`;

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private tokenService: TokenService) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? 'msg-error' : 'msg-success'
    });
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URI, task, this.getAuthorizatioHeader());
  }

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URI, this.getAuthorizatioHeader());
  }

  readById(id: number): Observable<Task> {
    const url = `${this.API_URI}/${id}`;
    return this.http.get<Task>(url, this.getAuthorizatioHeader());
  }

  update(product: Task): Observable<Task> {
    const url = `${this.API_URI}/${product.id}`;
    return this.http.put<Task>(url, product, this.getAuthorizatioHeader());
  }

  delete(id: number): Observable<Task> {
    const url = `${this.API_URI}/${id}`;
    return this.http.delete<Task>(url, this.getAuthorizatioHeader());
  }

  setDone(id: number, done: boolean): Observable<any> {
    const url = `${this.API_URI}/${id}/${done}`;
    return this.http.put(url, null, this.getAuthorizatioHeader());
  }

  private getAuthorizatioHeader() {
    return {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.tokenService.getToken()}`)
    }
  }

}
