const fsPromises = require('fs').promises;

fsPromises.access('./data/file1.txt')
    .then(function(){
        console.log('can access');
        return fsPromises.readFile('./data/file1.txt')
    })
    .then(function(data){
        console.log('data: ', data.toString());
        var newText = data.toString().replace('world', 'node.js');
        console.log('newText : ', newText);
        return fsPromises.writeFile('./data/file1.txt', newText)
    })
    .then(function(){
        return fsPromises.readFile('./data/file1.txt')
    })
    .then(function(data){
        console.log('data: ', data.toString());
    })
    .catch(function(){
        console.log('error');
    })

// var fileNames = []
// fsPromises.readdir('./data')
//     .then((files) => {
//        console.log(files);
//        fileNames = files.map(function(element){
//             return fsPromises.readFile(`./data/${element}`)
//         })
//         console.log(fileNames);
//         fsPromises.all(fileNames)
//             .then((data) => {
//                 console.log(data.toString('utf8'));
//             })
//     })
//     .catch(() => console.error('cannot access'));

// fsPromises.all(fileNames).then((data) => {
//     console.log(data)    //returns [20,30,40]
// });

    // .then((data)=>{
    //     console.log(data.toString('utf8'));
    //     return fsPromises.readFile(`./data/file3.txt`)
    // })
    // .then((data)=>{
    //     console.log(data.toString('utf8'));
    //     return fsPromises.writeFile('./data/file1.txt', 'hello world')
    // })
    // .then(()=>{
    //     return fsPromises.readFile(`./data/file1.txt`)
    // })
    // .then((data)=>{
    //     console.log(data.toString('utf8'));
    // })
