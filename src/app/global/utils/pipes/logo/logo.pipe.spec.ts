import { LogoEnum } from "../../../enum/logo.enum";
import { LogoPipe } from "./logo/logo.pipe";

describe("LogoPipe", () => {
  let pipe: LogoPipe;

  beforeEach(() => {
    pipe = new LogoPipe();
  });

  it("returns correct logo for a known technology", () => {
    const result = pipe.transform("Angular");
    expect(result).toBe(LogoEnum.Angular);
  });

  it("returns default logo for unknown value", () => {
    const result = pipe.transform("unknown-value");
    expect(result).toBe(LogoEnum.Logo);
  });
});
