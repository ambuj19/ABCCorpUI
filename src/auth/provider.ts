import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { OAuthStorage, provideOAuthClient } from 'angular-oauth2-oidc';
import { authInitializerFactory, AuthService, AuthGuardService, jwtInterceptor } from './services';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';


export function provideAuthServiceClient(): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: APP_INITIALIZER,
            useFactory: () => () => {
            },
            deps: [AuthService],
            multi: true,
        },
        { provide: OAuthStorage, useFactory: () => localStorage as OAuthStorage },
        provideHttpClient(withInterceptors([jwtInterceptor])),
        provideOAuthClient({
            resourceServer: {
                allowedUrls: [environment.apiUrl],
                sendAccessToken: true,
            },
        }),
        AuthGuardService,
    ]);
}
