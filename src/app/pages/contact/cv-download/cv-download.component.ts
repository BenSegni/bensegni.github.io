import { Component } from '@angular/core';
import { ContactDownloads } from '../interface/contact.downloads';

@Component({
  selector: 'app-cv-download',
  templateUrl: './cv-download.component.html'
})
export class CvDownloadComponent {
    public downloadDocuments: ContactDownloads[] = [
        {
            link: '../../../../assets/docs/CV.pdf',
            text: 'CV Download Link (.pdf)'
        },
        {
            link: '../../../../assets/docs/CV.docx',
            text: 'CV Download Link (.docx)'
        }
    ]
}
