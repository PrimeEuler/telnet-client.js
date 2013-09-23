telnet-client.js
================

node.js telnet client that processes TELNET Commands.

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
    host: '192.168.1.1',
    port: 23,
    username: 'admin',
    password: 'cisco',
    enpassword: 'cisco'
}

var c = new Telnet();

c.connect(config);
c.on('data', function (data) {
    console.log(data.toString());
    c.write('string \r\n');
});
c.on('error', function (error) {
    console.log("error", error);
});
c.on('timeout', function () {
    console.log("timeout");
});
c.on('close', function (had_error) {
    console.log("close",had_error);
});
c.on('end', function () {
    console.log("end");
});

```
