"use strict";

const fs = require('fs');
const path = require('path');

const fileDir = path.join(__dirname, 'public' , 'images', 'view02');
const files = fs.readdirSync(fileDir)
for(const file of files) {
    const newFileName = file.toLowerCase();
    fs.renameSync(path.join(fileDir, file), path.join(fileDir, newFileName))
}
console.log("Renamed all files");