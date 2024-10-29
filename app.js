 // global installation
 // mac for installing packages need to know 
 //sudo npm install -g, <package name>

 //local package installing npm i <packageName>


 //package.json - manifest file (stores important info about project/package)
const _ = require('lodash')
 const items = [1,[2,[3,[4]]]]
 const newItems = _.flattenDeep(items)
 console.log(newItems)


 