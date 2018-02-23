const fs = require('fs')

const templatefiles = {}

templatefiles.getTemplateFile = function(name = 'phpbase', type = 'php') {
    return fs.readFileSync('templates/'+name+'.'+type, {encoding: 'utf8'});
}

templatefiles.createAppFile = function(content, name = 'index', type = 'php') {
    fs.writeFileSync('app/'+name+'.'+type, content, err => { if(err)throw err });
}

module.exports = templatefiles;
