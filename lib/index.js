'use strict';

var pkg         = require('../package.json');
var fs          = require('fs');
var path        = require('path');
var globalProxy = require('global-proxy');


function readFile(filepath) {
    return fs.readFileSync(path.resolve(__dirname, filepath), 'utf8');
}

exports.help = function () {
    try {
        var filepath = path.join('../doc/help.txt');
        var content  = readFile(filepath);

        console.log(content);
    } catch (e) {
        console.log('help can\'t be displayed.\n');
    }
};

exports.version = function () {
    console.log('  v' + pkg.version);
};

exports.enable = function (options) {
    globalProxy.enable(options.host, options.port, options.protocol)
        .then(function () {

            var msg = 'The system\'s network was proxy to: ' + options.host + ':' + options.port;

            if (/^win/.test(process.platform)) {
                msg += '. It may take up to 1min to take effect.';
            }

            console.log(msg);
        })
        .catch(function (error) {
            console.log(error);
        });
};

exports.disable = function () {
    globalProxy.disable()
        .then(function () {
            console.log('The proxy was closed.');
        })
        .catch(function (error) {
            console.log(error);
        });
};

exports.status = function () {

    globalProxy.status()
        .then(function (stdout) {
            console.log(stdout);
        })
        .catch(function (error) {
            console.log(error);
        });
};