import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSynopsisComponent } from './related-synopsis.component';
import { Showcase } from '../../showcase/interface/showcase';
import { Router } from '@angular/router';

describe('RelatedSynopsisComponent', () => {
    let component: RelatedSynopsisComponent;
    let fixture: ComponentFixture<RelatedSynopsisComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RelatedSynopsisComponent]
        });
        fixture = TestBed.createComponent(RelatedSynopsisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Testing navigateToSynopsis()', () => {
        it('should navigate to the identified project', () => {
            const routerstub: Router = TestBed.inject(Router);
            const spyRouter = spyOn(routerstub, 'navigate');
            const spyFind = spyOn<any>(component, 'findRelatedProject');
            const project = component['_globalService'].showcaseSignal$().find(project => project.id = '1');

            component.navigateToSynopsis(project as Showcase);

            expect(spyRouter).toHaveBeenCalled();
            expect(spyFind).toHaveBeenCalled();
        })
    });
});
