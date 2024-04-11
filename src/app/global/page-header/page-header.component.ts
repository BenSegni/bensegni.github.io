import { Component } from '@angular/core';

interface Header {
    greeting: string;
    jobTitle: string;
    skills: string[];
    location: string;
    locationLink: string;
    logoPath: string;
}

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {
    public headerContent: Header = {
        greeting: "Hi, I'm <span>Ben</span>.",
        jobTitle: 'A Frontend <span>full-stack developer</span>.',
        skills: ['Angular', 'HTML5', 'Jasmine', 'NestJs', 'NgRx', 'ReactJs', 'RxJs', 'SASS', 'Typescript'],
        location: 'County Durham, United Kingdom.',
        locationLink: 'https://maps.app.goo.gl/X1s9Tfpd2ZJWqGSN7',
        logoPath: '../../../assets/img/me/me_3.webp'
    }
}
