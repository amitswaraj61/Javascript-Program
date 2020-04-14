const power_number=require('./Utility/powerNum');
var readline=require('readline-sync');
var number=readline.question("enter the number"+" ");
function validate()
{
    var pattern=/^[1-9][0-9]{0,}$/;
    if(pattern.test(number))
    {
        power_number(number);
    }
    else
    {
        console.log("please give proper input");
        
    }
}
validate();