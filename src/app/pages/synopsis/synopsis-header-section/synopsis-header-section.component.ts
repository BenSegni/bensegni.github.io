import {
  ChangeDetectionStrategy,
  Component,
  input,
} from "@angular/core";

interface HeaderSection {
  headerOne: string;
  headerTwo: string;
}

@Component({
    selector: "app-synopsis-header-section",
    templateUrl: "./synopsis-header-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SynopsisHeaderSectionComponent {
  public headerSection = input<HeaderSection>({
    headerOne: "",
    headerTwo: "",
  });
}
