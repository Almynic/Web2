/**
 * Created by Nicolas on 21.04.2016.
 *
 * Test
 * curl -X POST -d '{"tasks": [{"title":"Buy milk","done":false}]}' http://zhaw.herokuapp.com/task_lists/demo
 */

var http = require('http');

var srv = http.createServer(function (req, res) {
    console.log('created server');

    if (req.method == 'POST') {
        console.log('POST has been chosen');
        var body = '';
        req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {
            sendPostRequest(body);
        });

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }

}).listen(1337, 'localhost');

sendPostRequest = function (jsonString) {
    var options = {
        host: 'zhaw.herokuapp.com',
        path: '/task_lists/demo',
        method: 'POST',
    };

    console.log('Send request to : ' + options['host']);

    var postReq = http.request(options, function(res) {
        res.setEncoding('utf8');
        var answer = '';
        res.on('data', function (chunk) {
            answer += chunk;
        });

        res.on('end', function() {
            console.log('Answer from ZHAW: ' + answer);
        });
    });

    postReq.write(jsonString);
    postReq.end();

}
