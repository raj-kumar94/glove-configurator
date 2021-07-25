
const fs = require('fs');
const path = require('path');

const COLORS = {
    'jk': [
        "darkcamel",
        "camel",
        "lightblue",
        "pink",
        "lemonyellow",
        "orange",
        "natural",
        "toffee",
        "tiffany",
        "darkpurple",
        "royalblue",
        "red",
        "darkgreen",
        "navy",
        "black",
        "brown",
        "wine",
        "white",
        "gray",
        "darkgray",
    ],
    'ussh': [
        "camel",
        "pink",
        "lemonyellow",
        "orange",
        "natural",
        "coffee",
        "tan",
        "purple",
        "waterblue",
        "royalblue",
        "red",
        "navy",
        "black",
        "white",
        "tiffany",
        "gray",
        "applegreen",
        "darkgreen",
    ],
    'ch': [
        "camel",
        "natural",
        "royalblue",
        "red",
        "navyblue",
        "black",
        "darkbrown",
        "white",
        "gray",
        "darkgray",
    ]
}

// view01-fielder-hoodstitch

const parts = {
    'view01': [
        'wrist',
        'patch',
        'logo',
        'f1',
        'f2',
        'f3',
        'f4',
        'f5',
        'f6',
        'f7',
        'f8',
        't1',
        't2',
        // 't2full',
        'binding',
        'welting',
        'palm',
        'web',
        'lace',
        'fpindex',
        'fpmiddle',
        'hoodindex',
        'hoodmiddle',
        'fpstitchindex',
        'fpstitchmiddle',
        'hoodstitchindex',
        'hoodstitchmiddle',
        'stitch',
        // 'e',
    ],
    'view02': [  // view02-fielder-e
        'wrist',
        'patch',
        'logo',
        'f1',
        'f2',
        // 'f3',
        // 'f4',
        // 'f5',
        // 'f6',
        // 'f7',
        // 'f8',
        't1',
        't2',
        't2full',
        'binding',
        'welting',
        'palm',
        'web',
        'lace',
        'fpindex',
        'fpmiddle',
        'hoodindex',
        'hoodmiddle',
        'fpstitchindex',
        // 'fpstitchmiddle',
        'hoodstitchindex',
        // 'hoodstitchmiddle',
        'stitch',
        'e',
    ],
    'view03': [ // view03-fielder-wrist
        // 'wrist',
        // 'patch',
        // 'logo',
        // 'f1',
        'f2',
        // 'f3',
        'f4',
        // 'f5',
        'f6',
        // 'f7',
        'f8',
        't1',
        // 't2',
        // 't2full',
        'binding',
        'welting',
        'palm',
        'web',
        'lace',
        // 'fpindex',
        // 'fpmiddle',
        // 'hoodindex',
        // 'hoodmiddle',
        // 'fpstitchindex',
        // 'fpstitchmiddle',
        // 'hoodstitchindex',
        // 'hoodstitchmiddle',
        // 'stitch',
        // 'e',
    ],
    'view04': [ // view04-fielder-e
        'wrist',
        'patch',
        'logo',
        'f1',
        'f2',
        'f3',
        'f4',
        'f5',
        'f6',
        'f7',
        'f8',
        // 't1',
        // 't2',
        // 't2full',
        'binding',
        'welting',
        // 'palm',
        // 'web',
        'lace',
        // 'fpindex',
        'fpmiddle',
        // 'hoodindex',
        'hoodmiddle',
        // 'fpstitchindex',
        'fpstitchmiddle',
        // 'hoodstitchindex',
        'hoodstitchmiddle',
        // 'stitch',
        // 'e',
    ]
}

const WEBS = [
    "t",
    "i",
    "h",
    "y",
    "v",
    "basket",
    "basketlace",
    "lacecross",
    "1piece",
    "2piece",
    // "h",
    // "post",
    // "1piece",
    // "2piece",
    "shield",
    "sealing",
    "lacesealing",
    "cross",
    "trapeze",
]

const view = 'view02'
const fileDir = path.join(__dirname, 'public' , 'images', view);
const files = fs.readdirSync(fileDir);
let checkFiles = () => {

    const leatherTypes = ['jk', 'ussh', 'ch'];
    // let partName = 'f1';
    // let leatherType = 'jk';
    // let color = 'red';

    let existingFiles = {};
    let missingFiles = [];
    for(const file of files) {
        existingFiles[file] = 1;
    }

    console.log('==========================================================');
    console.log('======================SORTED BY COLOR=====================');
    console.log('==========================================================');
    for(let leatherType of leatherTypes) {
        for(const color of COLORS[leatherType]) {
            for(let partName of parts[view]) {
                if(['web', 'lace', 'stitch'].includes(partName)) {
                    for(let webType of WEBS) {
                        let tempPartName = partName;
                        if(view === 'view04' && tempPartName === 'lace') {
                            // tempPartName will remain same
                        } else {
                            tempPartName = `${tempPartName}-${webType}`
                        }
    
                        let fileName = `${view}-fielder-${tempPartName}-${leatherType}-${color}.png`;
                        if(!existingFiles[fileName]) {
                            console.log(fileName);
                            missingFiles.push(fileName);
                        }
                    }
                } else {
                    let fileName = `${view}-fielder-${partName}-${leatherType}-${color}.png`;
                    if(!existingFiles[fileName]) {
                        console.log(fileName);
                        missingFiles.push(fileName);
                    }
                }
            }
        }
    }
    // console.log(existingFiles);
    missingFiles.sort();
    console.log('=============================================================');
    console.log('======================SORTED BY FILENAME=====================');
    console.log('=============================================================');
    for(let f of missingFiles) {
        console.log(f);
    }
}

checkFiles();