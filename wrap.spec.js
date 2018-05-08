const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  const testStr =
    'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';

  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('does not do line breaks in the middle of words', () => {
    expect(wrap(testStr, 20)).to.equal(
      `Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`
    );
  });
  it('line breaks at specific points', () => {
    const result = wrap(testStr, 20);
    expect(result.indexOf('\n')).to.equal(17);
    expect(result.indexOf('\n', 18)).to.equal(38);
  });
  it('does not change the amount of words', () => {
    const wordLength = testStr.split(' ').length;
    expect(wrap(testStr, 20).split(' ').length).to.equal(13);
  });
});
