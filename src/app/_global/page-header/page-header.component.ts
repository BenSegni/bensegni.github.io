import { Component } from '@angular/core';

interface Header {
    header: string;
    title: string;
    location: string;
    logoPath: string;
}

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
    public headerContent: Header = {
        header: 'Ben Segni',
        title: 'Lead Full Stack Software Engineer &amp; UI Designer.',
        location: 'County Durham, United Kingdom.',
        logoPath: '../../../assets/img/logo.svg'
    }
}
