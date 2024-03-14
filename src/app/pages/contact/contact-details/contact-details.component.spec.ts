import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';
import { ContactTypeComponent } from '../contact-type/contact-type.component';
import { ContactLinkPipe } from '../pipes/contact-link.pipe';
import { LinkedinIconComponent } from '../../../global/icons/linkedin-icon/linkedin-icon.component';
import { EmailIconComponent } from '../../../global/icons/email-icon/email-icon.component';
import { BehanceIconComponent } from '../../../global/icons/behance-icon/behance-icon.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactDetailsComponent,
        ContactTypeComponent,
        ContactLinkPipe,
        LinkedinIconComponent,
        EmailIconComponent,
        BehanceIconComponent
      ]
    });
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
