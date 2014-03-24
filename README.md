telnet-client.js
================

node.js telnet client that processes TELNET Commands.

Component of:
* [NMS.js](https://github.com/PrimeEuler/NMS.js)

```bash
RX: IAC.DO.terminalType

TX: IAC.WILL.terminalType.IAC.WILL.windowSize

RX: IAC.DO.windowSize

TX: IAC.SB.windowSize.transmitBinary.200.transmitBinary.64.IAC.SE

RX: IAC.SB.terminalType echo IAC.SE

TX: IAC.SB.terminalType.transmitBinary.ANSI.IAC.SE
```


### Requirements:

* [node.js](http://nodejs.org/) -- v0.8.7 or newer

### Usage/API:
```bash
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
```
