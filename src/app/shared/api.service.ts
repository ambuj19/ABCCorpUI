import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../models/task-data.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public httpClient: HttpClient = inject(HttpClient);
  private readonly serviceUrl = 'https://localhost:7095/api';
  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.serviceUrl}/tasks`);
  }
}
