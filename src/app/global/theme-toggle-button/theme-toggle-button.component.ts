import { Component, inject } from "@angular/core";
import { ThemeService } from "../services/theme/theme.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-theme-toggle-button",
  imports: [CommonModule],
  templateUrl: "./theme-toggle-button.component.html",
  styleUrl: "./theme-toggle-button.component.scss",
})
export class ThemeToggleButtonComponent {
  private _themeService: ThemeService = inject(ThemeService);

  public theme = this._themeService.theme === "dark" ? "light" : "dark";

  public toggleTheme(): void {
    this._themeService.toggleTheme();
    this.theme = this._themeService.theme === "dark" ? "light" : "dark";
  }
}
