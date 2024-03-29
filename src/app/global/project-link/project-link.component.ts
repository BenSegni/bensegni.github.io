import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Showcase } from '../../pages/showcase/interface/showcase';

@Component({
  selector: 'app-project-link',
  templateUrl: './project-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectLinkComponent implements OnInit, OnChanges {
  @Input() public project: Showcase | undefined;
  @Input() public url = '';
  public pdf = 'View PDF Proposal';
  public behance = 'Project Presentation';
  public medium = 'Read on Medium';
  public isMedium = false;
  public link = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (this.checkIfMediumLink()) {
        this.isMedium = true;
      }

      if (this.project?.downloadLink) {
        this.link = this.project.downloadLink;
      } else if (this.url) {
        this.link = this.url;
      } else if (this.project?.showCaseLink) {
        this.link = this.project?.showCaseLink;
      } else {
        this.link = '';
      }
    }
  }

  public ngOnInit(): void {}

  private checkIfMediumLink(): boolean | undefined {
    return this.project?.showCaseLink?.includes('medium');
  }

  public openLink(url: string): void {
    window.open(url, '_blank')
  }
}
