import { LogoPipe } from './logo.pipe';

describe('LogoPipe', () => {
    it('create an instance', () => {
        const pipe = new LogoPipe();
        expect(pipe).toBeTruthy();
        expect(pipe.transform('some-random-logo')).toBe('../../assets/img/logo.svg');
    });
});
