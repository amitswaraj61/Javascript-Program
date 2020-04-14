const checkAnagram=require('./Utility/Anagram');
var readline=require('readline-sync');
var string1=readline.question("enter the string"+" ");
var string2=readline.question("enter the second string"+" ");
function validate()
{
    var pattern=/^[a-zA-Z0-9]{1,}$/;
    if(pattern.test(string1) & pattern.test(string2))
    {
        checkAnagram(string1,string2);
    }
    else
    {
        console.log("give proper input");
    }
}
validate();




























