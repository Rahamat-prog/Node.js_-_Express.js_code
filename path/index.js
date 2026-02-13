const path = require("path");
const { fileURLToPath } = require("url");

// console.log(path.sep); // output \

// console.log(process.env.PATH); // output add with ;

// console.log(path.delimiter); // ;

// const filePath = 'E:\PW Node.js\path\index.html'
const currentFilepath = __filename;
console.log(currentFilepath) // e:\PW Node.js\path\index.js

let result = path.basename(currentFilepath);
console.log (`base name- ${result}`) // index.js(file name with extension)

let baseNameWithoutExt = path.basename(currentFilepath, '.js')
console.log(`baseName without extension- ${baseNameWithoutExt}`) //baseName without extension- index

let dirName = path.dirname(currentFilepath)
console.log(`dirName - ${dirName}`) // dirName - e:\PW Node.js\path

console.log(`ext1 - ${path.extname(currentFilepath)}`)//ext1 - .js
console.log(`ext2 - ${path.extname('index.md.js')}`)//ext2 - .js

let pathToFile = path.format({
    dir: '\PW Node.js\path',
    base: 'index.html'
})
console.log(`pathToFile - ${pathToFile}`) 

//path is absulate or not 
console.log(`isAbsulate - ${path.isAbsolute(currentFilepath)}`)//isAbsulate - true
console.log(`isAbsulate - ${path.isAbsolute('/index.js')}`)//isAbsulate - true
console.log(`isAbsulate - ${path.isAbsolute('.index.js')}`)//isAbsulate - false here we are talking about the current file path with the mention dot
console.log(`isAbsulate - ${path.isAbsolute('../index.js')}`)//isAbsulate - false 

let pathToDir = path.join('/home','js','dist','index.js')
console.log(`join - ${pathToDir}`) //join - \home\js\dist\index.js

console.log('parse', path.parse(currentFilepath)) //output below
// parse {
//   root: 'e:\\',
//   dir: 'e:\\PW Node.js\\path',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

console.log('relative path', path.relative('\home\User\config', '\home\User\js'))//relative path ..\homeUserjs

console.log('resolve', path.resolve()); // resolve E:\PW Node.js

console.log('normalize', path.normalize("//node//user//js"))// normalize \\node\user\js
