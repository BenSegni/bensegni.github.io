import { Component } from '@angular/core';
import { copyText, dataPoints } from './data/copy.text';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
    public privacyPolicyCopy = {
        copy: copyText,
        dataPoints: dataPoints,
    }
}
