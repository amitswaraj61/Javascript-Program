function Queue()
{
    this.head=0;
    this.dataStore=[];
}
try
 {
Queue.prototype.enqueue=function(value)
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
 }

catch(error)
{
    console.log(error);
}

module.exports=new Queue();