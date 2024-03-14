import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { ReferencesComponent } from './references/references.component';
import { ContactTypeComponent } from './contact-type/contact-type.component';
import { ContactLinkPipe } from './pipes/contact-link.pipe';
import { LinkedinIconComponent } from '../../global/icons/linkedin-icon/linkedin-icon.component';
import { EmailIconComponent } from '../../global/icons/email-icon/email-icon.component';
import { BehanceIconComponent } from '../../global/icons/behance-icon/behance-icon.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent,
        ContactDetailsComponent,
        CvDownloadComponent,
        ReferencesComponent,
        ContactTypeComponent,
        ContactLinkPipe,
        LinkedinIconComponent,
        EmailIconComponent,
        BehanceIconComponent
      ]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
