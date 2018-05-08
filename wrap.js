function wrap(str, length) {
  if (str === '') return str;
  let strArray = str.split(' ');
  let returnStr = '';
  let finalreturnStr = '';
  let counter = 0;
  strArray.forEach(word => {
    counter += word.length + 1;
    if (counter >= length - 1) {
      returnStr += '\n';
      returnStr += word;
      returnStr += ' ';
      counter = 0;
    } else {
      returnStr += word;
      returnStr += ' ';
    }
  });

  for (let i = 0; i < returnStr.length; i++) {
    if (returnStr[i + 1] === '\n' || returnStr[i + 1] === undefined) {
      continue;
    } else {
      finalreturnStr += returnStr[i];
    }
  }
  return finalreturnStr;
}

module.exports = wrap;
