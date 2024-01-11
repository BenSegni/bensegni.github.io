import {
    AfterViewInit,
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
} from '@angular/core';
import { ToolTipConfig } from './interfaces/tooltip';
import { take, timer } from 'rxjs';
import { GlobalDataService } from '../../global-data.service';

@Directive({
    selector: '[tooltip]',
})
export class InfoDirective implements AfterViewInit {
    @Input() tooltip: ToolTipConfig | undefined;
    private delayReset$ = timer(300);

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    public ngAfterViewInit(): void {
        this.createIconElement();
    }

    @HostListener('mouseenter') onHover(): void {
        if (this.tooltip) this.generateInfoBox(this.tooltip.text);
    }

    @HostListener('mouseleave') onLeave(): void {
        this.delayReset$.pipe(take(1)).subscribe({
            complete: () => this.resetInfoText()
        })
    }

    private addToParentNode(parent: HTMLElement, child: HTMLElement | string): void {
        this.renderer.appendChild(parent, child);
    }

    private addAttribute(element: HTMLElement, attribute: string, dataSrc: string): void {
        element.setAttribute(attribute, dataSrc);
    }

    private createDOMElement(element: string): HTMLElement {
        return this.renderer.createElement(element);
    }

    private createInnerText(text: string): string {
        return this.renderer.createText(text);
    }

    private addClassDOMElement(element: HTMLElement, selector: string): void {
        element.classList.add(selector);
    }

    /**
     * creates an icon graphic
     * @returns an icon graphic
     */
    private createIconElement(): void {
        if (!this.tooltip) return;
        this.renderer.addClass(this.el.nativeElement, 'info-icon-wrapper');
        const iconElement: HTMLElement = this.createDOMElement('icon');
        this.addClassDOMElement(iconElement, 'info-icon');
        this.addToParentNode(this.el.nativeElement, iconElement);
    }

    /**
     * resetInfoText()
     * resets the tooltip when user closes or hovers off
     */

    private resetInfoText(): void {
        const infoBox: HTMLElement = this.el.nativeElement.querySelector('div');
        this.renderer.removeChild(this.el.nativeElement, infoBox);
        return;
    }

    /**
     * generateInfoBox()
     * @param text - string to pass into the tooltip box
     * @returns tool tip element which appears on hover
     */

    private generateInfoBox(text: string): HTMLElement {
        //create span for tool tip box and set styling
        const infoBox: HTMLElement = this.createDOMElement('div');
        const infoText: string = this.createInnerText(text);
        this.addClassDOMElement(infoBox, 'info-box');

        //set title for tool tip box
        const titleElement: HTMLElement = this.createDOMElement('h4');
        const textParagraph: HTMLElement = this.createDOMElement('p');
        const title: string = this.createInnerText(
            `${this.tooltip?.toolTipTitle}`
        );

        this.addToParentNode(titleElement, title);
        this.addToParentNode(textParagraph, infoText);
        this.addToParentNode(infoBox, titleElement);

        //create supporting imagery
        if (this.tooltip?.imageUrl) {
            const image: HTMLElement = this.createDOMElement('img');
            this.addAttribute(image, 'src', this.tooltip.imageUrl)
            this.addToParentNode(infoBox, image);
        }

        this.addToParentNode(infoBox, textParagraph);

        //create hyperlink for tooltip more info
        const link: HTMLElement = this.createDOMElement('a');

        if (this.tooltip?.link && this.tooltip.linkText) {
            this.addAttribute(link, 'href', this.tooltip.link)
            this.addAttribute(link, 'target', '_blank')
            this.addClassDOMElement(link, 'tool-tip-link');
        }

        if (this.tooltip?.link && this.tooltip.linkText) {
            const linkText: string = this.createInnerText(this.tooltip.linkText);

            this.addToParentNode(link, linkText);
        }

        //create a help link title for the link to display after
        if (this.tooltip?.link && this.tooltip.linkText) {
            const helpTextTitle: HTMLElement = this.createDOMElement('p');
            this.addClassDOMElement(helpTextTitle, 'help-title');
            const helpText: string = this.createInnerText('Link: ');
            this.addToParentNode(helpTextTitle, helpText);
            this.addToParentNode(helpTextTitle, link);
            this.addToParentNode(infoBox, helpTextTitle);
        }

        //create a breakpoint if there is no link added to tooltip
        if (
            (!this.tooltip?.link && !this.tooltip?.linkText) ||
            (this.tooltip?.link && !this.tooltip.linkText) ||
            (!this.tooltip.link && this.tooltip.linkText)
        ) {
            const breakPoint: HTMLElement = this.createDOMElement('span');
            this.addClassDOMElement(breakPoint, 'breakpoint');
            this.addToParentNode(infoBox, breakPoint);
        }

        //create button for closing tooltip
        const button: HTMLElement = this.createDOMElement('button');
        const buttonText: string = this.createInnerText('Close');
        this.addToParentNode(button, buttonText);
        this.addAttribute(button, 'click', 'closeTooltip()');
        this.addToParentNode(infoBox, button);
        this.addToParentNode(this.el.nativeElement, infoBox);

        infoBox.addEventListener('click', (event) => {
            if (!event) return;
            this.resetInfoText();
        });

        return infoBox;
    }
}
