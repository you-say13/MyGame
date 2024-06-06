import { createRequire } from 'module';
const require = createRequire(import.meta.url);var fs = require("fs");

var levelDatas = [];


const createData = () => {
    var id = 1;
    var exp = 10;
    
    while (id <= 100) {
      levelDatas.push({ id: id, exp: Math.round(exp) });
      id++;
      exp *= 1.5;
    }

    let levelDatas2 = JSON.stringify({Level: levelDatas}, null, ' ')
    fs.writeFileSync('src/Data/Utility.json', levelDatas2)
}

createData();
console.log(levelDatas)