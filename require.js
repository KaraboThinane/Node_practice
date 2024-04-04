//Globals - No Window !!!!

//__dirname  - path to current directory
//__filename - file name
// require   - function to use modules (CommonJS)
//module     - info about current module (file)
//process    - info about env where the program is being executed

console.log(__dirname)

const names = require('./5-names');
const hi = require('./4-utils'); 
console.log(hi)


hi.hello('Susan')
hi.hello(names.John)
hi.hello(names.Peter)