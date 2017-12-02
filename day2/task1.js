var result = 0;

// linereader idea from https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
  var row = line.split('\t');
  var rowMax = Math.max(...row);
  var rowMin = Math.min(...row);
  result += (rowMax - rowMin);

});

lineReader.on('close', function() {
  console.log(result);

});
