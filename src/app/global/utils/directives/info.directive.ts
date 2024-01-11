import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Input,
} from '@angular/core';
import { ToolTipConfig } from './interfaces/tooltip';
import { take, timer } from 'rxjs';
import { DOMCreator } from './shared/element.creation';

@Directive({
    selector: '[tooltip]',
})
export class InfoDirective implements AfterViewInit {
    @Input() tooltip: ToolTipConfig | undefined;
    private delayReset$ = timer(300);

    constructor(
        private el: ElementRef,
        private creator: DOMCreator
    ) { }

    public ngAfterViewInit(): void {
        if (this.tooltip) this.creator.createIconElement(this.tooltip, this.el);
    }

    @HostListener('mouseenter') onHover(): void {
        if (this.tooltip) this.generateInfoBox(this.tooltip.text);
    }

    @HostListener('mouseleave') onLeave(): void {
        this.delayReset$.pipe(take(1)).subscribe({
            complete: () => this.creator.resetInfoText(this.el)
        })
    }

    /**
     * generateInfoBox()
     * @param text - string to pass into the tooltip box
     * @returns new @type {( ToolTipConfig )} element which appears on hover
     */

    private generateInfoBox(text: string): HTMLElement {
        //create span for tool tip box and set styling
        const infoBox: HTMLElement = this.creator.createDOMElement('div');
        const infoText: string = this.creator.createInnerText(text);
        this.creator.addClassDOMElement(infoBox, 'info-box');

        //set title for tool tip box
        const titleElement: HTMLElement = this.creator.createDOMElement('h4');
        const textParagraph: HTMLElement = this.creator.createDOMElement('p');
        const title: string = this.creator.createInnerText(
            `${this.tooltip?.toolTipTitle}`
        );

        this.creator.addToParentNode(titleElement, title);
        this.creator.addToParentNode(textParagraph, infoText);
        this.creator.addToParentNode(infoBox, titleElement);

        //create supporting imagery
        if (this.tooltip?.imageUrl) {
            const image: HTMLElement = this.creator.createDOMElement('img');
            this.creator.addAttribute(image, 'src', this.tooltip.imageUrl)
            this.creator.addToParentNode(infoBox, image);
        }

        this.creator.addToParentNode(infoBox, textParagraph);

        //create hyperlink for tooltip more info
        const link: HTMLElement = this.creator.createDOMElement('a');

        if (this.tooltip?.link && this.tooltip.linkText) {
            this.creator.addAttribute(link, 'href', this.tooltip.link)
            this.creator.addAttribute(link, 'target', '_blank')
            this.creator.addClassDOMElement(link, 'tool-tip-link');
        }

        if (this.tooltip?.link && this.tooltip.linkText) {
            const linkText: string = this.creator.createInnerText(this.tooltip.linkText);

            this.creator.addToParentNode(link, linkText);
        }

        //create a help link title for the link to display after
        if (this.tooltip?.link && this.tooltip.linkText) {
            const helpTextTitle: HTMLElement = this.creator.createDOMElement('p');
            this.creator.addClassDOMElement(helpTextTitle, 'help-title');
            const helpText: string = this.creator.createInnerText('Link: ');
            this.creator.addToParentNode(helpTextTitle, helpText);
            this.creator.addToParentNode(helpTextTitle, link);
            this.creator.addToParentNode(infoBox, helpTextTitle);
        }

        //create a breakpoint if there is no link added to tooltip
        if (
            (!this.tooltip?.link && !this.tooltip?.linkText) ||
            (this.tooltip?.link && !this.tooltip.linkText) ||
            (!this.tooltip.link && this.tooltip.linkText)
        ) {
            const breakPoint: HTMLElement = this.creator.createDOMElement('span');
            this.creator.addClassDOMElement(breakPoint, 'breakpoint');
            this.creator.addToParentNode(infoBox, breakPoint);
        }

        //create button for closing tooltip
        const button: HTMLElement = this.creator.createDOMElement('button');
        const buttonText: string = this.creator.createInnerText('Close');
        this.creator.addToParentNode(button, buttonText);
        this.creator.addAttribute(button, 'click', 'closeTooltip()');
        this.creator.addToParentNode(infoBox, button);
        this.creator.addToParentNode(this.el.nativeElement, infoBox);

        infoBox.addEventListener('click', (event) => {
            if (!event) return;
            this.creator.resetInfoText(this.el);
        });

        return infoBox;
    }
}
