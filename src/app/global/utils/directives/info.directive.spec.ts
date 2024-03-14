import { ElementRef, Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { InfoDirective } from './info.directive';

import { Component } from '@angular/core';
import { DOMCreatorService } from './shared/element.creation';
import { DOMCreatorServiceMock } from './mocks/element.creation.mock';

@Component({
    selector: 'test-component',
    template: `<div></div>`,
})
export class TestComponent { }


describe('InfoDirective', () => {
    let el: ElementRef;

    let creator: DOMCreatorService;
    let directive: InfoDirective;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            providers: [{
                provide: DOMCreatorService,
                useClass: DOMCreatorServiceMock
            }]
        });
        directive = new InfoDirective(el, creator);
        fixture = TestBed.createComponent(TestComponent);
        directive['_el'] = fixture.componentRef.injector.get<ElementRef>(
            ElementRef as Type<ElementRef>
        );
        creator = TestBed.inject(DOMCreatorService);
        fixture.detectChanges();
    });

    // describe('Testing generateInfoBox()', () => {
    //     beforeEach(() => {
    //         directive.tooltip = {
    //             toolTipTitle: 'Test',
    //             text: 'test text',
    //             imageUrl: 'testurl',
    //             link: 'link',
    //             linkText: 'link text',
    //         };

    //     });

    //     it('should create an HTML Element', () => {
    //         directive['generateInfoBox']('text');
    //         expect(directive['generateInfoBox']).toBeTruthy();
    //     });
    // });

    // describe('Testing generateInfoBox() without link or link text', () => {
    //     beforeEach(() => {
    //         directive.tooltip = {
    //             toolTipTitle: 'Test',
    //             text: 'test text',
    //             imageUrl: 'testurl',
    //         };
    //     });

    //     it('should create an HTML Element', () => {
    //         directive['generateInfoBox']('text');
    //         fixture.detectChanges();
    //         expect(directive['generateInfoBox']).toBeTruthy();
    //     });
    // });

    describe('Testing Hostlistener Events', () => {
        beforeEach(() => {
            directive.tooltip = {
                toolTipTitle: 'Test',
                text: 'test text',
                imageUrl: 'testurl',
            };

        });

        it('should create tooltip on hover', () => {
            const spyInfoBox = spyOn<any>(directive, 'generateInfoBox');
            directive.onHover();
            fixture.detectChanges();
            expect(spyInfoBox).toHaveBeenCalled();
        })

        it('should reset tooltip on leave', (done) => {
            const spyResetInfo = spyOn<any>(directive['_creator'], 'resetInfoText');
            directive.onLeave();
            directive['delayReset$'].subscribe({
                complete: () => {
                    expect(spyResetInfo).toHaveBeenCalled();
                    done();
                }
            });
        })
    })
});