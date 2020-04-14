Power_Number=(num) =>
{
  try
  {  
    for(var i=0;i<num;i++)
    {
        console.log(Math.pow(2,i)+" ");
    }
}

   catch(error)
   {
       console.log(error);
   }
}  
module.exports=Power_Number;