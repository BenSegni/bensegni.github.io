import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const maintenanceGuard: CanActivateFn = () => {
  const router = inject(Router);
  router.navigate(['under-construction'])
  return false;
};
