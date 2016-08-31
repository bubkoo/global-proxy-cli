#!/usr/bin/env node

var actions = require('../lib/index');

var argv = require('minimist')(process.argv.slice(2), {
    alias: {
        e: 'enable',
        d: 'disable',
        h: 'host',
        p: 'port',
        t: 'type',
        s: 'status',
        H: 'help',
        V: 'version'
    },
    string: [
        'port',
        'host',
        'type'
    ],
    boolean: [
        'enable',
        'disable',
        'status',
        'help',
        'version'
    ],
    default: {
        e: false,
        d: false,
        s: false,
        t: 'http'
    },
    unknown: function () {
        //return false;
    }
});


if (argv.help) {
    return actions.help();
}

if (argv.version) {
    return actions.version();
}

if (argv.enable) {

    actions.enable(argv);

} else if (argv.disable) {

    actions.disable();

} else if (argv.status && !/^win/.test(process.platform)) {

    actions.status();

} else {
    actions.help();
}
