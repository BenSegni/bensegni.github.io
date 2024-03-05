import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
declare let process: any;

export const maintenanceGuard: CanActivateFn = () => {
  const env = process.env.NODE_ENV;
  const router = inject(Router);

  if (env === 'production') {
    router.navigate(['under-construction']);
    return false;
  } else {
    return true;
  }

};
