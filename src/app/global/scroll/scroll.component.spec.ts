import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponent } from './scroll.component';

describe('ScrollComponent', () => {
    let component: ScrollComponent;
    let fixture: ComponentFixture<ScrollComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ScrollComponent]
        });
        fixture = TestBed.createComponent(ScrollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing scroll', () => {
        it('should scroll to top of page when called', () => {
            const spyScroll = spyOn(window, 'scrollTo');

            component.scroll();

            expect(spyScroll).toHaveBeenCalled();
        })
    })
});
