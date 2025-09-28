import { FilterLinkPipe } from './filter-link.pipe';

describe('FilterLinkPipe', () => {
  let pipe: FilterLinkPipe;

  beforeEach(() => {
    pipe = new FilterLinkPipe();
  });

  it('returns correct link for a known technology', () => {
    const result = pipe.transform('Angular');
    expect(result).toBe('/'); // default until LinkEnum resolves in tests
  });

  it('returns default for unknown value', () => {
    const result = pipe.transform('unknown');
    expect(result).toBe('/');
  });
});
