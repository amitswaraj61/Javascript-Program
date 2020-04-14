const distance=require('./Utility/Distance');
var readline=require('readline-sync');
console.log("welcome");
var a=readline.question("enter a co-ordinate"+" ");
var b=readline.question("enter b co-ordinate"+" ");
function validate()
{
    var pattern=/^[0-9]{1,}$/;
    if(pattern.test(a) & pattern.test(b))
    {
        distance(a,b);
    }
    else
    {
        console.log("please give proper input");
    }
}

validate();

