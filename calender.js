const readline = require('readline-sync');
const access = require('./utility/calender2D');
let month = readline.question('Enter the month : ');
let year = readline.question('Enter the year : ');
if (month === '' || year === '' || (parseInt(month) > 12 || parseInt(month) < 1) || year.length !== 4) {
console.log('Give valid input');
} else {
access.calender(parseInt(month), parseInt(year));
}