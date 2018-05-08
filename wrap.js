function wrap(str, length) {
  if (str === '') return str
  let strArray = str.split(' ')
  let returnStr = ''
  let finalreturnStr = ''
  let counter = 0
  strArray.forEach(word => {
    counter += word.length + 1
    if (counter >= length - 1) {
      returnStr += '\n'
      returnStr += word
      returnStr += ' '
      counter = 0
    } else {
      returnStr += word
      returnStr += ' '
    }
  })
  
  for (let i = 0; i < returnStr.length; i++) {
    if (returnStr[i + 1] === '\n' || returnStr[i + 1] === undefined) {
      continue;
    } else {
      finalreturnStr += returnStr[i]
    }
  }
  return finalreturnStr
}

// function wrap(line, maxLen) {
//   if (line.length <= maxLen) {
//     return line
//   }

//   const indexofBlank = line.lastIndexOf(' ', maxLen);
//   let split;
//   let offset;
//   if (indexofBlank > -1) {
//     split = indexofBlank
//     offset = 1;
//   } else {
//     split = maxLen;
//     offset = 0
//   }

//   return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);

// }

// function wrap(str, column) {
//   let result = '';
//   let endOfLastLine = 0;
//   for (let i = 0, counter = 1; i < str.length; i++, counter++) {
//     if (counter === column) {
//       counter = 1;
//       result += str.slice(endOfLastLine, i + 1);
//       result += '\n';
//       endOfLastLine = i + 2;
//     }
//   }
//   return result;
// }

module.exports = wrap;
