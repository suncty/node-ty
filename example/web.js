eval(global.ty());

var server;

ty(function() { //Load
    var app = express();

    app.get('/', function(req, res) {
        res.send(global_function());
    });

    app.get('/foo', function(req, res) {
        res.send(data.foo());
    });

    app.get('/bar', function(req, res) {
        res.send(data.bar);
    });

    server = http.createServer(app).listen(8080);
});

ty(function() { //Unload
    if(server) server.close();
});