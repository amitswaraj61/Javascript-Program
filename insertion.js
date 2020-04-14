const insertion_sort=require('./Utility/insertionSort');
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
            arry[i]=readline.question("enter value"+" ");
        }
        insertion_sort.insertion_Sort(arry,num);
        insertion_sort.disp(arry,num);
    }
    else
    {
        console.log("please give proper number");
    }
}
validate();
