#!/usr/bin/env node

// arguments
const optionArgs = [
    { name: '', alias: 'v', type: Boolean, defaultValue: false }
];

//
const cli_args = require('command-line-args');
const options = cli_args(optionArgs);

console.log(options);
