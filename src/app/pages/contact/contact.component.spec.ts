import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CvDownloadComponent } from './cv-download/cv-download.component';
import { ReferencesComponent } from './references/references.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent, ContactDetailsComponent, CvDownloadComponent, ReferencesComponent]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
