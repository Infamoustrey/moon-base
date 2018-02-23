
exports.scaffold = function(structure){

      recurse(structure);

}

function recurse(structure){

  if( typeof structure  === 'object'){

    for (var property in structure) {
      if (structure.hasOwnProperty(property)) {

          if(typeof structure[property] === 'object'){

              createDirectory(property);

              recurse(structure[property]);

          }else if(typeof structure[property] === 'string'){

              createFile(structure[property]);

          }

      }
    }

  }else if(typeof structure === 'string'){

      createFile(structure);

  }

}

function createFile(filename){

    console.log('Created File: ',filename);

}
