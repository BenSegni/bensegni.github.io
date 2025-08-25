import { Component } from '@angular/core';

@Component({
    selector: 'app-site-build',
    templateUrl: './site-build.component.html',
    standalone: false
})
export class SiteBuildComponent {
    public specification: string[] = ['Angular', 'Github', 'Jasmine', 'Inkscape', 'RxJs', 'SASS', 'Typescript', 'Visual Studio'];
    public presentationLink = 'https://www.behance.net/gallery/188393735/Personal-Professional-Website-Build';
    public buildCopy = 'This portfolio website has been build with the following technologies &amp; software:'
    public mobileCopy = 'This site renders across small mobile, mobile, tablet &amp; Desktop, with Rich UI PWA Integration for both Desktop &amp; Mobile.';

}
