#! /usr/bin/env node

const fs = require('fs');
const templatefiles = require('../template-files');

// get templatefiles
let phpbase = templatefiles.getTemplateFile();
let cssbase = templatefiles.getTemplateFile('cssbase', 'css');

// set base directory
let basedir = 'app'

// Create Directory Structure
let appStructure = [
  'css',
  'js',
  'lib',
  'img',
  'docs',
];

fs.mkdirSync(basedir);

appStructure.forEach(dir => {

    fs.mkdirSync(basedir+'/'+dir);

});


// Create Base Files

templatefiles.createAppFile(phpbase);
templatefiles.createAppFile(cssbase, 'css/style', 'css');
