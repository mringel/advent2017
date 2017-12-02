var result = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});

// linereader idea from https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
lineReader.on('line', function (line) {
  var row = line.split('\t');
  for (var i = 0; i < row.length-1; i++) {
    for (var j = i+1; j < row.length; j++) {
      if (row[i]%row[j]===0) {
        result += row[i]/row[j];
      } else if (row[j]%row[i]===0) {
        result += row[j]/row[i];
      }
    }
  }

});

lineReader.on('close', function() {
  console.log(result);

});
