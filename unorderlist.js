var fs=require('fs');
var readline=require('readline-sync');
const linkedList=require('./utility/linkedList');
let readString = fs.readFileSync('file', 'utf8');
var arr=[];
arr=readString.split(" ");
for(var i=0;i<arr.length;i++)
{
    var wd=arr[i];
    linkedList.add(wd);
}
console.log(linkedList);
var key=readline.question("enter the key to be searched"+" ");
console.log(readString);
if(linkedList.search(key))
{
    console.log(key + " found so it will be removed from list");
                linkedList.Remove(key);
}
else
{
    console.log(key + " not found so it will be added to list");
    linkedList.Append(key);
}   
console.log("After processing final list is as below and your file is modified ");
linkedList.print();
var filecontent = linkedList.print();
fs.writeFileSync('file2', filecontent);