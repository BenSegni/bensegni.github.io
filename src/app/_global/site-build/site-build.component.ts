import { Component } from '@angular/core';

@Component({
    selector: 'app-site-build',
    templateUrl: './site-build.component.html',
    styleUrls: ['./site-build.component.scss']
})
export class SiteBuildComponent {
    public specification: string[] = ['Angular', 'Jasmine', 'Inkscape', 'RxJs', 'SASS', 'Typescript', 'Visual Studio'];
    public presentationLink = 'https://www.behance.net/gallery/188393735/Personal-Professional-Website-Build'

}
