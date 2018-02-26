
const fs = require('fs');

exports.scaffold = function(structure){

      recurse(structure);

}

function recurse(structure, parent = ''){

  if( typeof structure  === 'object'){

    for (var property in structure) {
      if (structure.hasOwnProperty(property)) {

          if(typeof structure[property] === 'object'){

              if (parent === '') {
                  createDirectory(property);
                  recurse(structure[property], property);
              }else{
                   createDirectory(parent + '/' + property);
                   recurse(structure[property], parent + '/' + property);
              }

          }else if(typeof structure[property] === 'string'){

              if (parent === '') {
                  createFile(structure[property]);
              }else{
                  createFile(parent + '/' + structure[property]);
              }

          }

      }
    }

  }else if(typeof structure === 'string'){

      createFile(structure);

  }

}

function createFile(filename){

    fs.writeFile(filename, 'Test file', (err) => {
      if (err) throw err;
      console.log('Created File: ', filename);
    });

}

function createDirectory(dirpath){

    fs.mkdir(dirpath, err => {
      if (err) throw err;
      console.log('Created Directory: ', dirpath);
    });

}
