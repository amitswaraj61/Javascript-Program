Distance=(a,b) =>
{
  try
  {
    console.log(Math.sqrt(a^2+b^2));
  }

  catch(error)
  {
      console.log(error);
  }
}  

module.exports=Distance;