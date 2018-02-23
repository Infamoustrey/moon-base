#! /usr/bin/env node

const fs = require('fs');
const templatefiles = require('../template-files');

// get templatefiles
let phpbase = templatefiles.getTemplateFile();
let cssbase = templatefiles.getTemplateFile('cssbase', 'css');
let htmlbase = templatefiles.getTemplateFile('htmlbase', 'html');
let jsbase = templatefiles.getTemplateFile('jsbase', 'js');

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
templatefiles.createAppFile(phpbase, 'about');
templatefiles.createAppFile(phpbase, 'contact');
templatefiles.createAppFile(phpbase, 'nav');
templatefiles.createAppFile(phpbase, 'about');

templatefiles.createAppFile(cssbase, 'css/style', 'css');

templatefiles.createAppFile(jsbase, 'js/index', 'js');
