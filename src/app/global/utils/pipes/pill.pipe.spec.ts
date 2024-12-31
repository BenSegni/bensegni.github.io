import { ColorPaletteEnum } from '../../enum/color-palette.enum';
import { KeywordsEnum } from '../../enum/keywords.enum';
import { PillPipe } from './pill.pipe';
import { TechnologyEnum } from '../../enum/technology.enum';

describe('PillPipe', () => {
    it('create an instance', () => {
        const pipe = new PillPipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform(KeywordsEnum.Code)).toBe(ColorPaletteEnum.red);
        expect(pipe.transform(KeywordsEnum.Contact)).toBe(ColorPaletteEnum.limeGreen);
        expect(pipe.transform(KeywordsEnum.Design)).toBe(ColorPaletteEnum.hotterPink);
        expect(pipe.transform(KeywordsEnum.Development)).toBe(ColorPaletteEnum.limeGreen);
        expect(pipe.transform(KeywordsEnum.Education)).toBe(ColorPaletteEnum.smokeyBlue);
        expect(pipe.transform(KeywordsEnum.Email)).toBe(ColorPaletteEnum.beetroot);
        expect(pipe.transform(KeywordsEnum.Experience)).toBe(ColorPaletteEnum.pink);
        expect(pipe.transform(KeywordsEnum.Portfolio)).toBe(ColorPaletteEnum.pinkPurple);
        expect(pipe.transform(KeywordsEnum.Skills)).toBe(ColorPaletteEnum.smokeyBlue);
        expect(pipe.transform(TechnologyEnum.UI)).toBe(ColorPaletteEnum.hotPink);
    });
});
