import { NavigationTextPipe } from './navigation-text/navigation-text.pipe';

describe('NavigationTextPipe', () => {
  let pipe: NavigationTextPipe;

  beforeEach(() => {
    pipe = new NavigationTextPipe();
  });

  it('returns empty string for unknown', () => {
    const result = pipe.transform('unknown');
    expect(result).toBe('');
  });
});
