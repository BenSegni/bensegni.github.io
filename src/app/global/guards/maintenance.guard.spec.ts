import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { enableProdMode, isDevMode } from "@angular/core";

import { TestBed } from "@angular/core/testing";
import { maintenanceGuard } from "./maintenance.guard";

describe("maintenanceGuard", () => {
  let router: Router;
  let mockRoute: ActivatedRouteSnapshot;
  let mockState: jasmine.SpyObj<RouterStateSnapshot>;

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => maintenanceGuard(...guardParameters));

  beforeEach(() => {
    mockRoute = new ActivatedRouteSnapshot();
    mockState = jasmine.createSpyObj<RouterStateSnapshot>(
      "RouterStateSnapshot",
      [],
      {
        url: "/test",
      }
    );

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy("navigate"),
          },
        },
      ],
    });

    router = TestBed.inject(Router);
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });

  describe("Testing Redirect", () => {
    describe("with guard", () => {
      beforeEach(() => {
        enableProdMode();
      });

      it("should redirect to under-construction and return true in production environment", () => {
        TestBed.runInInjectionContext(() => {
          const result = maintenanceGuard(mockRoute, mockState);
          expect(result).toBeFalse();
          expect(router.navigate).toHaveBeenCalledWith(["under-construction"]);
          expect(router.navigate).toHaveBeenCalledTimes(1);
        });
      });

      afterEach(() => {
        isDevMode();
      });
    });
  });
});
