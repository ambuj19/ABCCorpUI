import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OAuthService } from 'angular-oauth2-oidc';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services';
// import { AuthService } from './auth.service'; // Import AuthService

@Component({
  selector: 'text-to-stats-auth-callback',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss'],
})
export class AuthCallbackComponent implements OnInit {
  private readonly router = inject(Router);
  loadingStatus = false;

  constructor(private readonly oauthService: OAuthService, private readonly authService: AuthService) {}

  ngOnInit(): void {
    // Ensure the OAuthService is configured, without reapplying configuration here
    // Run initial login sequence which ensures that the configuration is loaded properly
    this.authService.runInitialLoginSequence().then(() => {
      this.loadingStatus = !!this.oauthService.getAccessToken();

      // If a valid access token exists, navigate to the home page
      if (this.oauthService.hasValidAccessToken()) {
        this.router.navigate(['/home']);
      } else {
        // Otherwise, continue the login flow
        this.oauthService.initLoginFlow();
      }
    });
  }
}
