const Year=require('./Utility/leapYear');
var readline=require('readline-sync');
var year=readline.question("enter the year"+" ");
const validate=() =>
{
    let pattern=/^[1-9]{1}[0-9]{3}$/
    if(pattern.test(year))
    {
        Year(year);
    }
    else
    {
        console.log("please give proper year");
    }
}
validate();
