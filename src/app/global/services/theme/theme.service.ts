import {
  DOCUMENT,
  inject,
  Injectable,
  Renderer2,
  RendererFactory2,
} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  public theme: "light" | "dark" = "dark";
  private renderer: Renderer2;
  private document: Document = inject(DOCUMENT);
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      this.theme = storedTheme;
    }
    this.renderer.addClass(this.document.body, this.theme);
  }

  public toggleTheme(): void {
    this.renderer.removeClass(this.document.body, this.theme);
    this.theme = this.theme === "dark" ? "light" : "dark";
    this.renderer.addClass(this.document.body, this.theme);
    localStorage.setItem("theme", this.theme);
  }
}
