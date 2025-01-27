import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideAuthServiceClient as provideAuthServiceClient } from '../auth/provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
  provideAuthServiceClient(),
  provideZoneChangeDetection({ eventCoalescing: true }), 
  provideAnimations(),
  provideRouter(routes), 
  provideHttpClient(), provideAnimationsAsync(),

  ]
};
