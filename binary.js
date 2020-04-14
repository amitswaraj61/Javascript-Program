const binary_search=require('./Utility/binarySearch');
var readline=require('readline-sync');
var arry=[];
var num=readline.question("enter the number"+" ");
function validate()
{
    var pattern=/^[1-9][0-9]{0,}$/;
    if(pattern.test(num))
    {
        console.log("enter the array elements");
        for(var i=0;i<num;i++)
          {
            arry[i]=readline.questionInt("enter value"+" ");
          }
        var key=readline.questionInt("enter the key to be searched"+" ");
        var result=binary_Search(arry,key);
        if(result<0)
          { 
           console.log("key not found");
          }
         else
            {
              console.log(result);
            }
    }
         else
           {
           console.log("please give proper input");
           }
}
validate();
