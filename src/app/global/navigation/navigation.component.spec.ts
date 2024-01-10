import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { AltTextPipe } from '../utils/pipes/alt-text.pipe';
import { ReplaySubject } from 'rxjs';
import { NavigationStart,Router, RouterEvent } from '@angular/router';
import { mockRouterStub, routerEventsSubject } from '../testing/router.stub';

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavigationComponent, AltTextPipe],
            providers: [
                {
                    provide: Router,
                    useValue: mockRouterStub
                }
            ]
        });
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing open()', () => {
        it('should hide navigation when navigating away', () => {
            routerEventsSubject.next(new NavigationStart(1, 'start'));
            component.show = true;

            component.open();

            expect(component.show).toBeFalsy();
        });
    })
});
