var fs = require('fs');

fs.readdir('./Chapter02/ModuleSystem', function(err, files){
    console.log(files);
    files.forEach(function(value){
        console.log(value);
    })
})