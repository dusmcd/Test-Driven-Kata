function wrap(str, column) {
  let result = '';
  let endOfLastLine = 0;
  for (let i = 0, counter = 1; i < str.length; i++, counter++) {
    if (counter === column) {
      counter = 1;
      result += str.slice(endOfLastLine, i + 1);
      result += '\n';
      endOfLastLine = i + 2;
    }
  }
  return result;
}

module.exports = wrap;
