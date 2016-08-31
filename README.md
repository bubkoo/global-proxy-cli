# global-proxy-cli

> Set system proxy for mac and windows platform.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/global-proxy-cli/blob/master/LICENSE)


## Installation

```
$ npm install -g global-proxy-cli
```


## Usage

```
  Usage: global-proxy [options]


  Options:

  -e, --enable ................... enable the system proxy.
  -d, --disable .................. disable the system proxy.
  -h, --host hostname ............ the hostname of the system proxy.
  -p, --port port ................ the port of the system proxy.
  -t, --type protocol ............ the protocol of the system proxy.
  -s, --status ................... get the status of the system proxy.(mac only)
  -V, --version .................. display the current version of this cli.
  -H, --help ..................... you're looking at it.

  Examples:

  $ global-proxy -s
  $ global-proxy --enable --host=127.0.0.1 --port=9000
  $ global-proxy --disable
```

## Related

- [global-proxy](https://github.com/bubkoo/global-proxy) - Set system proxy for mac and windows platform.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/global-proxy-cli/issues/new).
