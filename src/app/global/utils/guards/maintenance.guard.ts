import { CanActivateFn, Router } from "@angular/router";
import { inject, isDevMode } from "@angular/core";

export const maintenanceGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (isDevMode()) {
    return true;
  }

  router.navigate(["under-construction"]);
  
  return false;
};
