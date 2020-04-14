class Stack
{
    constructor()
    {
        this.top=null;
        
    }
push=(value) =>
{
   try
   { 
    console.log("push");
    let node=new Node1(value,this.top)
    this.top=node;
   }
   catch(error)
   {
       console.log(error);
   }
}

pop=() =>
{
   try
   { 
    let value=null
    if(this.top)
    {
        value=this.top.value;
        this.top=this.top.nextNode;
    }
    return value;
    }
    catch(error)
    {
        console.log(error);
    }
}

peek=() =>
{
   try
   { 
    return this.top;
   }
   catch(error)
   {
       console.log(error);
   }
}  

IsEmpty=() =>
{
  try
  {  
    if(this.top==-1)
    {
        return true;
    }
    else
    {
        return false;
    }
  } 
     catch(error)
     {
         console.log(error);
     }
}

size=() =>
{
   try
   { 
     return this.top+1;
    
   }
   catch(error)
   {
       console.log(error)
       {
           console.log(error);
       }
   }
}   

print=() =>
{
   try
   { 
    let ptr=this.top;
    while(ptr)
    {
        console.log(ptr.value);
        ptr=ptr.nextNode;
    }
   }
   catch(error)
   {
       console.log(error);
   }
}
}

module.exports=new Stack();

//parenthesis code
checkBalance=(str) =>
{
  try
   {
    let stack=[]
    for(var i=0;i<str.length;i++)
    {
        var letter=str.charAt(i);
        if(letter=='(')
        {
            stack.push(letter);
        }
        else if(letter==')')
        {
            if(stack.length==0)
            {
                return false;
            }
            if(letter==')' && stack.pop()!= '(')
            {
                return false;
            }
        }
    }
    return stack.length==0;
   }
   catch(error)
   {
       console.log(error);
   }
}   

module.exports=checkBalance;


