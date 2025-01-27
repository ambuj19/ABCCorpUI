import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const UserConstants = {
    RESPONSE_TYPE: 'code',
    NONCE_STATE_SEPARATOR: 'semicolon',
};

export const COMMON_AUTH_CONFIG: Partial<AuthConfig> = {
    responseType: UserConstants.RESPONSE_TYPE,
    redirectUri: `${window.location.origin}/response-oidc`,
    strictDiscoveryDocumentValidation: false,
    showDebugInformation: false,
    sessionChecksEnabled: false,
    clearHashAfterLogin: false,
    preserveRequestedRoute: true,
    nonceStateSeparator: UserConstants.NONCE_STATE_SEPARATOR,
};

export const AUTH_CONFIG: AuthConfig = {
    issuer: environment.issuerAD,
    clientId: environment.clientIdAD,
    scope: environment.scopeAD,
    ...COMMON_AUTH_CONFIG,
};
