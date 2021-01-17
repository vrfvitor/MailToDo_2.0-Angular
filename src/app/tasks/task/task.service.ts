import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';
import { TokenService } from '@core/token/token.service';
import { API_URL } from 'app/contants';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_URI = `${API_URL}/tasks`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URI, task);
  }

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URI);
  }

  readById(id: number): Observable<Task> {
    const url = `${this.API_URI}/${id}`;
    return this.http.get<Task>(url);
  }

  update(product: Task): Observable<Task> {
    const url = `${this.API_URI}/${product.id}`;
    return this.http.put<Task>(url, product);
  }

  delete(id: number): Observable<Task> {
    const url = `${this.API_URI}/${id}`;
    return this.http.delete<Task>(url);
  }

  setDone(id: number, done: boolean): Observable<any> {
    const url = `${this.API_URI}/${id}/${done}`;
    return this.http.put(url, null);
  }

}
