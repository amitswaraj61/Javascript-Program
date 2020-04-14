const path = require('./utility/Hashing');
const fs = require('fs')
let files = fs.readFileSync('hash.txt', 'utf8');
path.hashingFunction(files.split(','));