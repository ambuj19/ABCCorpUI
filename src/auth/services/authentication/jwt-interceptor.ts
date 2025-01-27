import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';

export function jwtInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
    const accountService = inject(OAuthService);
    const token = accountService.getAccessToken();
    console.log
    if (token) {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
        });
    }
    return next(request);
}
