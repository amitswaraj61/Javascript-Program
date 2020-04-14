const path = require('./utility/OrderList')
const fs = require('fs')
let files = fs.readFileSync('numbers.txt', 'utf8');
path.ordered(files.split(','));
var fs=require('fs');
