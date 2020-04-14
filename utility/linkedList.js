class Node 
{    
      constructor(data,next=null)
    {
        this.data=data;
        this.next=next;
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
add=(data) =>
{
   try
    { 
      this.head=new Node(data,this.head);
      this.size++;
    }
    catch(error)
    {
        console.log(error);
    }
}

search=(datas) =>
{  
    try
    {    
        var current=this.head;
        while (current != null)
            {
               if (current.data==datas)
                {
                    return true;
                }
                  current = current.next;
            }
               return false;
        }
        catch(error)
        {
            console.log(error);
        }
}      

Remove=(datas) =>
{
   try
   { 
    var current=this.head;
    var previous=null;
    while(current!=null)
    {
        if(current.data==datas)
        {
            if(previous==null)
            {
                this.head=current.next;
            }
            else
            {
                previous.next=current.next;
            }
            this.size--;
            return current.data;
        }
        previous=current;
        current=current.next;
    }
        return -1;
   }
    catch(error)
    {
        console.log(error);
    }
}    

Append=(datas) =>
{
 try
    {
    let node=new Node(datas);
    let current;
    if(!this.head)
    {
        this.head=node;
    }
    else
    {
        current=this.head;
        while(current.next)
        {
            current=current.next;
        }
        current.next=node;
    }
    this.size++;
   }
   catch(error)
   {
       console.log(error);
   }
}   

print=() =>
{
   try
   { 
    var str="";
    let current=this.head;
    while(current)
    {
        str=str+current.data+" ";
        current=current.next;
    }
    return str;
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
    if (Size() == 0)
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
}
module.exports=new LinkedList();

