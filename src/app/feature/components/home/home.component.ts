import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../../shared/api.service';
import { Task } from '../../../models/task-data.response';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [MatCardModule,MatIconModule ,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks: Task[] = [];
  isModalOpen = false;
  task = { name: '', description: '' };
  constructor(private apiService: ApiService,private http: HttpClient) { }
  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(): void {
    this.apiService.getTasks().subscribe({
      next: (data: Task[]) => {
        this.tasks = data; 
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      }
    });
  }
  viewTaskDetails(taskId: number): void {
    console.log(`View details for Task ID: ${taskId}`);

  }
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
    this.task = { name: '', description: '' }; // Clear the form
  }
  onSubmit() {
    if (this.task.name && this.task.description) {
      this.http.post('https://localhost:7095/api/tasks', this.task).subscribe(
        (response) => {
          console.log('Task added:', response);
          this.tasks.push(this.task);
          this.closeModal(); 
        },
        (error) => {
          console.error('Error adding task:', error);
        }
      );
    }
  }
}
