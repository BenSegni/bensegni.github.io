import { RouterEvent } from "@angular/router";
import { ReplaySubject } from "rxjs";

export const routerEventsSubject = new ReplaySubject<RouterEvent>(1);
export const mockRouterStub = {
    events: routerEventsSubject.asObservable()
};