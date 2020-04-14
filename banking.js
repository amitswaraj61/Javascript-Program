const checkBalance=require('./utility/queue');
var readline=require('readline-sync');
console.log("How many people are in the queue");
var people =readline.question("enter no of peoples"+" ");
function validate()
{
    var pattern=/^[1-9][0-9]{0,}$/;
    if(pattern.test(people))
    {
        var q=[people];
        var amount = 100000;                              //// initial amount in bank
        while (checkBalance.size() < people)
        {
             console.log("enter customer name");                  //// Taking customer one by one
             var a=readline.question("enter name"+" ");
            console.log(checkBalance.enqueue(a));
        }
        console.log("Current available balance in bank : " + amount);
        while (!checkBalance.isEmpty())
        {
        console.log(checkBalance.dequeue() + " enter 'W' to withdraw money or 'D' to deposit money");
        var ch=readline.question("enter your choice"+" ");
        console.log("Enter amount :"+" ");
        var entered =readline.questionInt("enter amount"+" ");
        if (ch == 'D' || ch == 'd')
            {
                console.log("deposit Succesfull");
                 amount = amount+entered;                    //// if amount is deposited
                
            }
            else if (ch == 'W' || ch == 'w')
            {
                //// if entered amount is greater than amount, then withdrawl not possible
                if (entered > amount)
                {
                    console.log("amount exceeds the available balance in Bank ");
                }
                else
                {
                    console.log("succesfully amount withdrawn");
                     amount = (amount-entered);
                }
            }
            else
            {
                console.log("Invalid choice");
            }
        
            console.log("Available Bank Balance : " + amount);
        }
        
    }
    else
    {
        console.log("please give proper number");
    }
}
validate();


