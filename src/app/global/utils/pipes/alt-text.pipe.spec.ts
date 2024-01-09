import { AltTextPipe } from './alt-text.pipe';

describe('AltTextPipe', () => {
  it('create an instance', () => {
    const pipe = new AltTextPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('../../assets/img/amazon.svg')).toEqual('amazon logo')
  });
});
