import { Component } from '@angular/core';

@Component({
    selector: 'app-profile-images',
    templateUrl: './profile-images.component.html',
    styleUrls: ['./profile-images.component.scss']
})
export class ProfileImagesComponent {
    public images: string[] = [
        '../../../assets/img/me/me_2.webp',
        '../../../assets/img/me/me_3.webp',
        '../../../assets/img/me/me_4.webp',
        '../../../assets/img/me/me_1.webp',
    ]
}
