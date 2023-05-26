/**
 * @jest-environment jsdom
 */

const movieCounter = (movies) => {
  if (movies.length === 0) {
    return 'No movies';
  }
  if (movies.length > 999) {
    return '999+';
  }
  return movies.length.toString();
};

describe('movieCounter function', () => {
  it('should return "No movies" if movies array is empty', () => {
    const result = movieCounter([]);
    expect(result).toEqual('No movies');
  });

  it('should return "999+" if movies array length is greater than 999', () => {
    const movies = new Array(1000).fill({ id: 1, name: 'Movie' });
    const result = movieCounter(movies);
    expect(result).toEqual('999+');
  });

  it('should return the number of movies if movies array length is between 1 and 999', () => {
    const movies = new Array(100).fill({ id: 1, name: 'Movie' });
    const result = movieCounter(movies);
    expect(result).toEqual('100');
  });
});
