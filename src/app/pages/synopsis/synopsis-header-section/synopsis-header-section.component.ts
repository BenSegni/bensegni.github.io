import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from "@angular/core";

interface HeaderSection {
  headerOne: string;
  headerTwo: string;
}

@Component({
    selector: "app-synopsis-header-section",
    templateUrl: "./synopsis-header-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynopsisHeaderSectionComponent {
  public headerSection: InputSignal<HeaderSection> = input<HeaderSection>({
    headerOne: "",
    headerTwo: "",
  });
}
