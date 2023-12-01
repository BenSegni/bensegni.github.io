import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';
import { UtilsModule } from 'src/app/_global/utils/utils.module';

describe('ShowcaseComponent', () => {
    let component: ShowcaseComponent;
    let fixture: ComponentFixture<ShowcaseComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UtilsModule],
            declarations: [ShowcaseComponent]
        });
        fixture = TestBed.createComponent(ShowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('testing Subscription()', () => {
        it('should emit values', () => {
            component.showcase$.subscribe({
                next: (response) => {
                    expect(response).toBeTruthy();
                    expect(response.length).toBe(5)
                    expect(response[0].projectTitle).toBe('9a Studios')
                }
            })
        })
    })
});
