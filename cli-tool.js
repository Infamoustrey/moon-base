#!/usr/bin/env node

const fs = require('fs');
const sf = require('./scaffold.js');

// arguments
const optionArgs = [
    { name: 'init', alias: 'i', type: Boolean, defaultValue: false },
    { name: 'outline', alias: 'o', type: String },
];

//
const cli_args = require('command-line-args');
const options = cli_args(optionArgs);

if(options.init){

      if(options.outline){

          fs.readFile(options.outline, 'utf8', (err, data) => {

              if(!options.outline.includes('.json') || err) {
                  console.error("File is either wrong format or does not exist!");
                  process.exit(1);
              }

              let structure = {};
              try{
                  structure = JSON.parse(data);
              }catch(err){
                  console.error('Bad Outline File');
                  process.exit(1);
              }

              sf.scaffold(structure);

          });

      }else{
        console.error('No Outline File!');
        process.exit(1);
      }

}else{
    console.log('Fly me to the moon...');
    process.exit(1); 
}
