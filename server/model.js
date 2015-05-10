//////////// replace with db
var fs = require('fs');
var csv = require('fast-csv');

var cache = {};

module.exports.init = init = function () {
  var data = fs.createReadStream(__dirname+'/data.csv');

  csv.fromStream(data, {headers: true})
    .on('data', function (data) {
      if (!cache[data.metric_id]) {
        cache[data.metric_id] = [];
      }
      cache[data.metric_id].push(data);
    })
    .on('end', function () {
      console.log('done');
    })
}

init();
/////////////////////////////


// Assuming API is read only. Really should be using SQLite instead of CSV
module.exports.get = function (query, cb) {
  // can refactor to use SQL statements
  if (query['start_date'] && query['time_range_length']) {
    var result = cache[query["metric_id"]].filter(function (row) {
      if (row["start_date"] >= query["start_date"] && 
        row["end_date"] < query["start_date"] + query["time_range_length"]) {
        return true;
      }
    });
  // case if end date provided without start
  // case if start date provided without end
  } else if (!query['start_date'] && !query['time_range_length']) {
    //return everything
    result = cache[query['metric_id']];
  }

  cb(null, result);
}

