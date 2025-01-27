export const environment = {
    production: false,
    chatGptApiKey: '',
    issuerAD: 'https://login.microsoftonline.com/251c4782-827b-4033-b7b5-12500263871f/v2.0',
    scopeAD: 'openid profile email offline_access 9cd60054-e9e4-4dda-988c-2faffeca0934/.default',
    openidPathAD: 'https://login.microsoftonline.com/251c4782-827b-4033-b7b5-12500263871f/v2.0/.well-known/openid-configuration',
    clientIdAD: '9cd60054-e9e4-4dda-988c-2faffeca0934',
    apiUrl: 'http://localhost:4200',
    retryCount: 2,
    debounceTimeInMs: 500,
};