var ok = require('assert').ok;

function reportResult(name, err) {
    var ul = document.getElementById('testResults');
    var li = document.createElement('li');
    if (err) {
        li.className = 'success';
        li.innerHTML = '✓ ' + name;
    } else {
        li.className = 'failure';
        li.innerHTML = '✗ ' + name + ' - ' + err;

        var pre = document.createElement('pre');
        pre.appendChild(document.createTextNode((err.stack || err) + ''));

        li.appendChild(pre);
    }

    ul.appendChild(li);
}

function loadProto1(callback) {
    require('raptor-loader').async(() => {
        import proto1 from './layouts/proto1/index.es6';

        try {
            ok(proto1() === 'proto1', 'Expected proto1() to equal "proto1"');
            reportResult('async loading - proto1');
        } catch(e) {
            reportResult('async loading - proto1', e);
        }
    });
}

function loadProto2(callback) {
    require('raptor-loader').async(() => {
        import proto1 from './layouts/proto2/index.es6';

        try {
            ok(proto1() === 'proto2', 'Expected proto1() to equal "proto2"');
            reportResult('async loading - proto2');
        } catch(e) {
            reportResult('async loading - proto2', e);
        }
    });
}

loadProto1();
loadProto2();