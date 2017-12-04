// --- Day 4: High-Entropy Passphrases ---
//
// A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.
//
// To ensure security, a valid passphrase must contain no duplicate words.
//
// For example:
//
// aa bb cc dd ee is valid.
// aa bb cc dd aa is not valid - the word aa appears more than once.
// aa bb cc dd aaa is valid - aa and aaa count as different words.
// The system's full passphrase list is available as your puzzle input. How many passphrases are valid?

// linereader idea from https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js

var result = 0;

function checkRow(row) {
  row.sort();
  for (var i = 0; i < row.length-1; i++) {
    if (row[i] === row[i+1]) {
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
  result = result + checkRow(row);
});

lineReader.on('close', function() {
  console.log(result);
});
