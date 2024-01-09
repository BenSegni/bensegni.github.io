import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSynopsisComponent } from './related-synopsis.component';
import { Showcase } from '../../showcase/interface/showcase';

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
        it('should save showcaseProject', () => {
            const project: Showcase = {
                id: '123',
                skills: [],
                projectTitle: 'test',
                description: 'test',
                background: 'background.jpg',
                routeUrl: 'route-url',
                details: 'string'
            }
            //component.navigateToSynopsis(project);

            //expect(component.showcaseProject).toEqual(project)
        })
    })
});
