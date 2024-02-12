import { getResourceId } from '@/app/lib/utils';

describe('Test utilities', () => {
  it('returns an id from the url with trailing slash', () => {
    const url = 'https://swapi.dev/api/films/1/';

    const id = getResourceId(url);

    expect(id).toEqual('1');
  });
  it('returns an id from the url without trailing slash', () => {
    const url = 'https://swapi.dev/api/people/5';

    const id = getResourceId(url);

    expect(id).toEqual('5');
  });
  it('returns an id from the url with query parameters', () => {
    const url = 'https://swapi.dev/api/vehicles/1?query=89';

    const id = getResourceId(url);

    expect(id).toEqual('1');
  });
});
