

const path = require("path");

console.log("filename:",__filename)
console.log("directoryname:",__dirname)

//we use now is common js,later we will use modulejs where this type of things doesn't exists
//school management system

//*folders/students/data.txt

const  filepath = path.join("folder","students", "data.txt");// it is universal for every os, in mac "/" is used and in android "\" is used

const parsenpath = path.parse(filepath)
const resolvePath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)


console.log({parsenpath,resolvePath,extname,basename,dirname})


