import { Component } from '@angular/core';

interface Header {
    header: string;
    title: string;
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
        header: 'Ben Segni',
        title: 'Lead Full Stack Software Engineer &amp; UI Designer.',
        location: 'County Durham, United Kingdom.',
        locationLink: 'https://maps.app.goo.gl/X1s9Tfpd2ZJWqGSN7',
        logoPath: '../../../assets/img/me/me_3.webp'
    }
}
