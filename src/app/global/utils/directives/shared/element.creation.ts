import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from "@angular/core";

import { ToolTipConfig } from './../interfaces/tooltip';

@Injectable({ providedIn: "root" })
export class DOMCreatorService {
  private renderer: Renderer2;
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  /**
   * addToParentNode()
   * @param parent parent node element
   * @param child new new @type {( HTMLElement )} child appendage element
   */
  public addToParentNode(
    parent: HTMLElement,
    child: HTMLElement | string
  ): void {
    this.renderer.appendChild(parent, child);
  }

  /**
   * addAttribute()
   * @param element @type {( HTMLElement )}
   * @param attribute attribute to be added to the element
   * @param dataSrc data binding for that attribute
   */
  public addAttribute(
    element: HTMLElement,
    attribute: string,
    dataSrc: string
  ): void {
    element.setAttribute(attribute, dataSrc);
  }

  /**
   * createDOMElement()
   * @param element new element to create
   * @returns @type {( HTMLElement )}
   */
  public createDOMElement(element: string): HTMLElement {
    return this.renderer.createElement(element);
  }

  /**
   * createInnerText()
   * @param text text to be added to element
   * @returns a new @type {( string )}
   */
  public createInnerText(text: string): string {
    return this.renderer.createText(text);
  }

  /**
   * addClassDOMElement()
   * @param element new @type {( HTMLElement )} to target for new class
   * @param selector selector to be added to the new @type {( HTMLElement )}
   */
  public addClassDOMElement(element: HTMLElement, selector: string): void {
    if (element) element.classList.add(selector);
  }

  /**
   * createIconElement()
   * @param toolTip @type {( ToolTipConfig )}
   * @param el @type {( ElementRef )}
   */
  public createIconElement(el: ElementRef<HTMLElement>): void {
    this.renderer.addClass(el.nativeElement, "info-icon-wrapper");
    const iconElement: HTMLElement = this.createDOMElement("icon");
    this.addClassDOMElement(iconElement, "info-icon");
    this.addToParentNode(el.nativeElement, iconElement);
  }

  /**
   * resetInfoText()
   * @param el @type {( ElementRef )} passed from directive
   */
  public resetInfoText(el: ElementRef<any>): void {
    const infoBox: HTMLElement = el.nativeElement.querySelector("div");
    this.renderer.removeChild(el.nativeElement, infoBox);
    return;
  }
}
