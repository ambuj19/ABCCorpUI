import { AuthService } from '../authentication/auth.service';

export function authInitializerFactory(authService: AuthService): () => Promise<void> {
    return () => authService.runInitialLoginSequence();
}
