/* 
  Este guard usará el servicio de autenticación para permitir o bloquear el acceso a rutas.
*/
import { CanActivateFn , Router} from '@angular/router';
import { inject, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // acceder a servicios sin contructor
  const router = inject(Router);

  if(authService.isLoggedIn()){
    return true;
  }

  router.navigate(['/login']);
  return false;
};
