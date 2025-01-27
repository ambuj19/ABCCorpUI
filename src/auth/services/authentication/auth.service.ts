import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AUTH_CONFIG } from './auth-config';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private readonly oauthService: OAuthService) {}
    async runInitialLoginSequence(): Promise<void> {
        this.oauthService.configure(AUTH_CONFIG);
        await this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            const token: string | null = this.oauthService.getAccessToken();
            if (!token) {
                this.oauthService.initLoginFlow();
            }
        });
    }
}
