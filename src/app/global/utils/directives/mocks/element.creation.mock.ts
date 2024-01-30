import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DOMCreatorServiceMock {
    public createIconElement(): void { }
    public createDOMElement(): HTMLElement {
        const html: HTMLElement = document.createElement('div')
        return html;
    }
    public createInnerText(): string {
        return 'info directive text';
    }
    public addClassDOMElement(): void {
        document.createElement('div').classList.add('class');
    }

    public addToParentNode(): void {}
    public addAttribute(): void {
        document.createElement('a').setAttribute('src', 'www.bbc.com');
    }

    public resetInfoText():void {}
}