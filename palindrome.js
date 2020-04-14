const deque=require('./utility/deque');
var readline=require('readline-sync');
console.log("Enter word to check palindrome");
var word = readline.question("enter the words"+" ");
function validate()
{
    var pattern=/^[0-9A-Za-z]{2,}$/;
    if(pattern.test(word))
    {
        isPalindrome(word);

        function isPalindrome(str)
        {
           try
           { 
           var dequeue=[];
            for(var i=0;i<str.length;i++)
            {
               dequeue=str.charAt(i);
             
                deque.addRear(dequeue);
            }
            while(!deque.isEmpty())
                    {
                        if(deque.size()==1)
                        {
                            break;
                       }
                        if((deque.deleteFront()===(deque.deleteRear())))
                        {
                            console.log(" true");
                            break;
                        }
                        console.log(" false");
                        break;
                    }
               }
               catch(error)
               {
                   console.log(error);
               }
            }
        }
        else
        {
            console.log("please give proper input");
        }
}
validate();
