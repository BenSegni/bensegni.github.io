import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from "@angular/core";
import { take, timer } from "rxjs";

import { DOMCreatorService } from "./shared/element.creation";
import { ToolTipConfig } from "./interfaces/tooltip";

@Directive({
    selector: "[tooltip]",
    standalone: false
})
export class InfoDirective implements AfterViewInit {
  @Input() tooltip: ToolTipConfig | undefined;
  private delayReset$ = timer(300);
  private _el = inject(ElementRef);
  private _creator = inject(DOMCreatorService);

  public ngAfterViewInit(): void {
    if (this.tooltip) this._creator.createIconElement(this._el);
  }

  @HostListener("mouseenter") onHover(): void {
    if (this.tooltip) this.generateInfoBox(this.tooltip.text);
  }

  @HostListener("mouseleave") onLeave(): void {
    this.delayReset$.pipe(take(1)).subscribe({
      complete: () => this._creator.resetInfoText(this._el),
    });
  }

  /**
   * generateInfoBox()
   * @param text - string to pass into the tooltip box
   * @returns new @type {( ToolTipConfig )} element which appears on hover
   */

  private generateInfoBox(text: string): HTMLElement {
    //create span for tool tip box and set styling
    const infoBox: HTMLElement = this._creator.createDOMElement("div");
    const infoText: string = this._creator.createInnerText(text);
    this._creator.addClassDOMElement(infoBox, "info-box");

    //set title for tool tip box
    const titleElement: HTMLElement = this._creator.createDOMElement("h4");
    const textParagraph: HTMLElement = this._creator.createDOMElement("p");
    const title: string = this._creator.createInnerText(
      `${this.tooltip?.toolTipTitle}`
    );

    this._creator.addToParentNode(titleElement, title);
    this._creator.addToParentNode(textParagraph, infoText);
    this._creator.addToParentNode(infoBox, titleElement);

    //create supporting imagery
    if (this.tooltip?.imageUrl) {
      const image: HTMLElement = this._creator.createDOMElement("img");
      this._creator.addAttribute(image, "src", this.tooltip.imageUrl);
      this._creator.addToParentNode(infoBox, image);
    }

    this._creator.addToParentNode(infoBox, textParagraph);

    //create hyperlink for tooltip more info
    const link: HTMLElement = this._creator.createDOMElement("a");

    if (this.tooltip?.link && this.tooltip.linkText) {
      this._creator.addAttribute(link, "href", this.tooltip.link);
      this._creator.addAttribute(link, "target", "_blank");
      this._creator.addClassDOMElement(link, "tool-tip-link");
    }

    if (this.tooltip?.link && this.tooltip.linkText) {
      const linkText: string = this._creator.createInnerText(
        this.tooltip.linkText
      );

      this._creator.addToParentNode(link, linkText);
    }

    //create a help link title for the link to display after
    if (this.tooltip?.link && this.tooltip.linkText) {
      const helpTextTitle: HTMLElement = this._creator.createDOMElement("p");
      this._creator.addClassDOMElement(helpTextTitle, "help-title");
      const helpText: string = this._creator.createInnerText("Link: ");
      this._creator.addToParentNode(helpTextTitle, helpText);
      this._creator.addToParentNode(helpTextTitle, link);
      this._creator.addToParentNode(infoBox, helpTextTitle);
    }

    //create a breakpoint if there is no link added to tooltip
    if (
      (!this.tooltip?.link && !this.tooltip?.linkText) ||
      (this.tooltip?.link && !this.tooltip.linkText) ||
      (!this.tooltip.link && this.tooltip.linkText)
    ) {
      const breakPoint: HTMLElement = this._creator.createDOMElement("span");
      this._creator.addClassDOMElement(breakPoint, "breakpoint");
      this._creator.addToParentNode(infoBox, breakPoint);
    }

    //create button for closing tooltip
    const button: HTMLElement = this._creator.createDOMElement("button");
    const buttonText: string = this._creator.createInnerText("Close");
    this._creator.addToParentNode(button, buttonText);
    this._creator.addAttribute(button, "click", "closeTooltip()");
    this._creator.addToParentNode(infoBox, button);
    this._creator.addToParentNode(this._el.nativeElement, infoBox);

    infoBox.addEventListener("click", (event) => {
      if (!event) return;
      this._creator.resetInfoText(this._el);
    });

    return infoBox;
  }
}
