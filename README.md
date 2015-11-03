# Supermuch

A node library for calculating extremely large numbers

Installation
------------

    npm install supermuch

Usage
-----

Provide two string representations of integers and an optional radix. The radix should be between `1` and `36` (inclusive).

    var supermuch = require('supermuch');

    console.log(supermuch.add('1', '1'));
    console.log(supermuch.add('1', '-1'));
    console.log(supermuch.add('99', '-100'));
    console.log('----');
    console.log(supermuch.subtract('1000', '1'));
    console.log(supermuch.subtract('1', '1000'));
    console.log('----');
    console.log(supermuch.add('1', '1', 2));
    console.log(supermuch.add('zzz', '1', 36));

Output:

    '2'
    '0'
    '-1'
    '----'
    '999'
    '-999'
    '----'
    '10'
    '1000'

Tests
-----

Run tests with `npm test`.


License
-------

The MIT License (MIT)

Copyright (c) 2015 Brian W. Nelson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
