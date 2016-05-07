/**
 * Created by Nicolas on 21.04.2016.
 */

var dns = require('dns');

dns.lookup('zhaw.herokuapp.com', function onLookup(err, address, family) {
    console.log('address:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });
});
