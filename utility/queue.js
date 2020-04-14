function Queue()
{
    this.head=0;
    this.dataStore=[];
}
Queue.prototype.enqueue=function(value)
{ 
    try
    {
    if(!value)
    {
        return "please summit a value";
    }
    else
    {
        this.dataStore.push(value);
        return this.dataStore;
    }
}
   catch(error)
   {
       console.log(error);
   }
}  
Queue.prototype.dequeue=function(value)
{
    try
    {
    if(this.dataStore.length>1)
    {
        this.dataStore.splice(0,1);
        return this.dataStore;
    }
    else
    {
        return this.dataStore=[];
    }
   }

   catch(error)
     {
       console.log(error);
     }
}  

Queue.prototype.peak=function()
{
    try
    {
    return this.dataStore[this.head] || null;
    }

    catch(error)
    {
        console.log(error);
    }
}    

Queue.prototype.isEmpty=function()
{
    try
    {
    return this.dataStore.length < 1;
    }
    catch(error)
    {
        console.log(error);
    }
}    
Queue.prototype.size=function()
{
    try
    {
    return this.dataStore.length;
    }
    catch(error)
    {
        console.log(error);
    }
}    
module.exports=new Queue;