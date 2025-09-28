
import { ColorPaletteEnum } from "../../../enum/color-palette.enum";
import { PillPipe } from "./pill.pipe";


describe('PillPipe', () => {
  let pipe: PillPipe;

  beforeEach(() => {
    pipe = new PillPipe();
  });

  it('returns correct color for a known keyword', () => {
    const result = pipe.transform('Code');
    expect(result).toBe(ColorPaletteEnum.red);
  });

  it('returns white for unknown value', () => {
    const result = pipe.transform('some-unknown-value');
    expect(result).toBe(ColorPaletteEnum.white);
  });
});
