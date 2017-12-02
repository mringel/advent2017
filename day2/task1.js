var result = 0;

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
