"use strict";

const fs = require('fs');
const path = require('path');

const fileDir = path.join(__dirname, 'public' , 'images', 'view04');
const files = fs.readdirSync(fileDir)
for(const file of files) {
    let newFileName = file.toLowerCase();
    if(newFileName.includes('-yellow.png')) {
        newFileName = newFileName.replace('yellow', 'lemonyellow');
        fs.renameSync(path.join(fileDir, file), path.join(fileDir, newFileName))
        console.log(newFileName);
    }
    // fs.renameSync(path.join(fileDir, file), path.join(fileDir, newFileName))
}
// for(const file of files) {
//     let newFileName = file.toLowerCase();
//     if(newFileName.indexOf('laces') !== -1) {
//         console.log(newFileName);
//         newFileName = newFileName.replace('laces', 'lace');
//         fs.renameSync(path.join(fileDir, file), path.join(fileDir, newFileName))
//     }
// }
console.log("Renamed all files");