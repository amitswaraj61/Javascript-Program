const path=require('./utility/stackLinkedList');
var readline=require('readline-sync');
console.log("Prime as well as Anagrams Numbers from 0 to 1000 using Stack in reverse order");
for (var i = 1000; i > 1; i--)
  {
      if (findPrime(i))
      {
          for (var j = i - 1; j > 0; j--)
          {
              if (findPrime(j) && toFindAnagram(i, j))
              {
                console.log(path.push(i));
                console.log(path.push(j));
                  break;
              }
          }
        }
   }
   function findPrime(num) {
       var count=0;
       for(var i=1;i<=num;i++)
       {
           if(num%i==0)
           {
               count++;
           }
       }
       if(count==2)
       {
           return true;
       }
       else{
           return false;
       }
    }
    

function toFindAnagram(char1, char2) {
        
   var num1= char1.toString();
    var num2=char2.toString();
    var string1=[];
    var string2=[];
     string1 = num1.split(''); //spliting to char
     string2 = num2.split('');
    
   string1.sort(function(a, b){return a-b});
   string2.sort(function(a, b){return a-b});

if(JSON.stringify(string1)==JSON.stringify(string2)) 
{
     return true;
}  
else
{
     return false;
} 
}

