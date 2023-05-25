import commentCounter from './commentCounter.js';

describe('Comments Functionality', () => {
  test('Count number of comments', () => {
    const myObject = [{
      0: 'First',
      1: 'Second',
      2: 'Third',
      3: 'Fourth',
    }];
    const newCount = commentCounter(myObject);
    expect(newCount).toBe(1);
  });

  test('Count number of comments', () => {
    const myObject = [5, 8, 25, 3];
    const newCount = commentCounter(myObject);
    expect(newCount).toBe(4);
  });
});