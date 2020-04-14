const Sum=require('./Utility/sumOfThree');
var readline=require('readline-sync');
var arry=[];
var num=readline.question("enter the number"+" ");
function validate()
{
    var pattern=/^[1-9][0-9]{0,}$/;
    {
       if(pattern.test(num))
       {
         console.log("enter the array elements");
         for(var i=0;i<num;i++)
         {
             arry[i]=readline.questionInt("enter value"+" ");
         }
         Sum.sumOfThree(arry,num);
       }
       else{
           console.log("please give proper number");
       } 
    }     
}    
validate();  






