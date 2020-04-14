Anagram=(x,y) =>
{
   try
   { 
var a=[];
var b=[];
a=x.split("");
b=y.split("");
console.log(a.sort());
console.log(b.sort());

if(JSON.stringify(a)==JSON.stringify(b)) 
{
  console.log("True"); 
}  
else
{
 console.log("False");
} 
   }

   catch(error)
   {
       console.log(error);
   }
} 
module.exports=Anagram;