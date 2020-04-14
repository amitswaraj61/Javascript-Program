const stack=require('./utility/stack');
var readline=require('readline-sync');
var string=readline.question("enter the string"+" ");
function validate()
{
var pattern=/^[()0-9+-0-9\*0-9\/]{1,}$/;
     if(pattern.test(string))
     {
        console.log(stack(string));
     }   
     else
     {
         console.log("please give proper string");

     }
}     
validate();




