var model = require('./model');

module.exports = {
  get: get,
  post: post,
  put: put
};

function get (req, res) {
  req.body['metric_id'] = req.params['metric_id'];
  model.get(req.body, function (err, result) {
      res.json({data: result});
  });
}

function post (req, res) {
  res.json({});
}

function put (req, res) {
  res.json({});
}
