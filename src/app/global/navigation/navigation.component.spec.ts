import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationStart, Router } from '@angular/router';
import { mockRouterStub, routerEventsSubject } from '../testing/router.stub';

import { AltTextPipe } from '../utils/pipes/alt-text.pipe';
import { NavigationComponent } from './navigation.component';
import { NavigationItem } from './interface/navigation';

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
    });

    describe('Testing onMouseEnter()', () => {
        it('should save the route as the selected route', () => {
            const navigationItem: NavigationItem = {
                route: 'about',
                anchorText: 'about',
                activeOptions: true,
                uiImage: 'string-to-image',
                keywords:['keywords', 'keywords', 'keywords']
            }

            component.onMouseEnter(navigationItem);

            expect(component.selectedRoute).toEqual(navigationItem);
        })
    })
});
