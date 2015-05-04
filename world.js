exports.expressCreateServer = function (hook_name, args, cb) {

  args.app.get('/pingback', function(req, res) {
    res.send("<strong>pongback!</strong>");
  });

};