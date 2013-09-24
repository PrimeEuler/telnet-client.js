var Telnet = require('../util-telnet');

var config = {
    host: 'route-server.ip.att.net',
    port: 23,
    username: 'rviews',
    password: 'rviews',
    enpassword: '',
    log:true
}

var c = new Telnet();

c.connect(config);

c.on('data', function (data) {
    console.log(data.toString());
    if (data.toString().indexOf(">") > -1) {
        c.write('exit \r\n');
    }
    
});
c.on('connect', function () {
    console.log("connect");
});
c.on('error', function (error) {
    console.log("error", error);
});
c.on('timeout', function () {
    console.log("timeout");
});
c.on('close', function (had_error) {
    console.log("close", had_error);
});
c.on('end', function () {
    console.log("end");
});