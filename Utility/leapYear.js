LeapYear=(year) =>
{
  try
  {
    if((year%400==0)||(year%4==0 && year%100!=0))
     {
       console.log("leap year");
     }
    else
      {
       console.log("not a leap year");
      }
   }

    catch(error)
    {
        console.log(error);
    }
}    

    module.exports=LeapYear;