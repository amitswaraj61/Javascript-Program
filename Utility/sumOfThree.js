class sum
{
sumOfThree=(arry,num) =>
{
    try
    {
    for(var i=0;i<num-2;i++)
    {
     for(var j=i+1;j<num-1;j++)
      {
        for(var k=j+1;k<num;k++)
        {
            if( arry[i] + arry[j] + arry[k] == 0 )
            {
                console.log(arry[i]+" "+arry[j]+" "+arry[k]);
            }
        }
      }
    }
  }
    catch(error)
    {
        console.log(error);
    }
}
}
   
 module.exports=new sum();
