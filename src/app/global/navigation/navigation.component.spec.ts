import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { AltTextPipe } from '../utils/pipes/alt-text.pipe';
import { Subject } from 'rxjs';
import { NavigationStart,Router, RouterEvent } from '@angular/router';

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;
    const routerEventsSubject = new Subject<RouterEvent>();
    const routerStub = {
        events: routerEventsSubject.asObservable()
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavigationComponent, AltTextPipe],
            providers: [
                {
                    provide: Router,
                    useValue: routerStub
                }
            ]
        });
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing open()', () => {
        it('should show navigation on click', () => {
            component.open();

            expect(component.show).toBeTruthy();
        });

        it('should hide navigation when navigating away', () => {
            routerEventsSubject.next(new NavigationStart(1, 'start'));
            component.show = true;

            component.open();

            expect(component.show).toBeFalsy();
        });
    })
});
