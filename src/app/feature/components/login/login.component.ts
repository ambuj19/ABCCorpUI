import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../auth/services';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router, private auth:AuthService) {}
 public navigate(){
  this.auth.runInitialLoginSequence();
 }
}
