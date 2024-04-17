import { pipe } from 'rxjs';
import { NavigationTextPipe } from './navigation-text.pipe';
import { NavigationEnum } from '../../enum/navigation.enum';
import { SubTextEnum } from '../../enum/navigation-subtext.enum';

describe('NavigationTextPipe', () => {
    it('create an instance', () => {
        const pipe = new NavigationTextPipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform(NavigationEnum.About)).toBe(SubTextEnum.About);
        expect(pipe.transform(NavigationEnum.Behance)).toBe(SubTextEnum.Behance);
        expect(pipe.transform(NavigationEnum.Contact)).toBe(SubTextEnum.Contact);
        expect(pipe.transform(NavigationEnum.CurrentProject)).toBe(SubTextEnum.CurrentProject);
        expect(pipe.transform(NavigationEnum.Github)).toBe(SubTextEnum.Github);
        expect(pipe.transform(NavigationEnum.LinkedIn)).toBe(SubTextEnum.LinkedIn);
        expect(pipe.transform(NavigationEnum.Showcase)).toBe(SubTextEnum.Showcase);
        expect(pipe.transform(NavigationEnum.Blog)).toBe(SubTextEnum.Blog);
        expect(pipe.transform(NavigationEnum.NPM)).toBe(SubTextEnum.NPM);
        expect(pipe.transform('odd-route')).toBe('');
    });
});
