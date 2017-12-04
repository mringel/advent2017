// task definition: http://adventofcode.com/2017/day/4

var result = 0;

function sortString(string) {
  return string.split('').sort().join('');
}

function isAnagram(word1, word2) {
  var word1 = word1.split('');
  var word2 = word2.split('');
  for (var i = 0; i < word1.length; i++) {
    if (word1[i] != word2[i]) { return false;}
  }
  return true;
}

function checkRow(row) {
  row.sort();
  for (var i = 0; i < row.length-1; i++) {
    if (isAnagram(row[i], row[i+1])) {
      return 0;
    }
  }
  return 1;
}
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
  var row = line.split(' ');
  for (var i = 0; i < row.length; i++) {
    row[i] = sortString(row[i]);
  }
  result = result + checkRow(row);
});

lineReader.on('close', function() {
  console.log(result);
});
