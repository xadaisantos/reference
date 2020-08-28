const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) {
//         throw err
//     };
//     console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world from xadai', (err) => {
//     if (err) {
//         throw err
//     };
//     console.log('File written to...');

//     // Append to file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I want a pizza', (err) => {
//         if (err) {
//             throw err
//         };
//         console.log('File written to...');
//     });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) {
//         throw err
//     };
//     console.log('File written to...');
//     console.log(data);
// });

// Rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
//     if (err) {
//         throw err
//     };
//     console.log('File renamed...');
// });
