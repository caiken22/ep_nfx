exports.expressCreateServer = function (hook_name, args, cb) {

  args.app.get('/ping', function(req, res) {
    res.send("<strong>pong!</strong>");
  });

};