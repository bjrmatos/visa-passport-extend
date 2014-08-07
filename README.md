# visa-passport-extend 

Abstract and error classes for implementing [visa-passport](https://github.com/borismcr9/visa-passport)'s backend API.

[![Dependencies](https://david-dm.org/borismcr9/visa-passport-extend.png)](https://david-dm.org/borismcr9/visa-passport-extend)

## Install

Install the module with: `npm install visa-passport-extend`

## Usage

This module exports an abstract `Backend` class and error classes (`NotOverrideError`, `InvalidArgumentsError`, `RuleExistsError`).

The `Backend` class is intended to be subclassed when implementing concrete backend class. Once implemented, such classes can be used by applications that utilize visa-passport middleware for authorization.

#### Subclass Backend

```js
var util = require('util'),
    Backend = require('visa-passport-extend');

function MyAwesomeBackend(...) {
  Backend.call(this);
}

util.inherits(MyAwesomeBackend, Backend);
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2014 BJR Matos <[https://github.com/borismcr9/](https://github.com/borismcr9/)>
Licensed under the MIT license.
