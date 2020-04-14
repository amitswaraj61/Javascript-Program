class Deque
{
    constructor()
    {
        this.item={};
        this.count=0;
        this.lowCount=0;
    }
 addRear=(element) =>
 {
     try
     {
       this.item[this.count]=element;
       this.count++;
       return this.item;
     } 
     catch(error)
     {
         console.log(error);
     }
}       

 addFront=(element) =>
 {
     try
     {
        if (this.item==0)
         {             
            this.addRear(element);
         } 
         else if (this.lowCount  > 0)
          {    
            this.lowCount --;
            this.item[this.lowCount] = element;
          } else 
             {                                
                for (let index = this.count; index > 0; index--) 
                {
                    this.item[index] =  this.item[index -1];
                }
                   this.count ++;
                   this.item[0] = element;
             }
                   return this.item;
    }  
      catch(error)
      {
          console.log(error);
      }
}      
 
deleteFront=() =>
{
    try
    {
      if (this.item==0) 
       {
         return false;
       }
       let result = this.item[this.lowCount];
       delete this.item[this.lowCount];
       this.lowCount++;
       return result;
    }
      catch(error)
      {
          console.log(error);
      }
}

deleteRear=() =>
{
  try
    {
      if (this.item==0)
       {
         return false;
       }
        let result = this.item[this.count - 1];
        delete this.item[this.count - 1];
        this.count--;
        return result;
    }
      catch(error)
      {
          console.log(error);
      }
}      

isEmpty=() =>
{
   try
   { 
    return this.length === 0;
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
    return this.size.length;
   }
   catch(error)
   {
       console.log(error);
   }
}
}
module.exports=new Deque();
