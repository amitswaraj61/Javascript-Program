class Bubble
{
bubble_Sort=(arr,number) =>
{
    try 
     {
        for(var i=0;i<=number-2;i++)
           {
             for(var j=0;j<=number-2-i;j++)
                {
                  if(arr[j]>arr[j+1])
                    {        
                       var temp=arr[j];
                       arr[j]=arr[j+1];
                       arr[j+1]=temp;
                    }
                }
           }
    }

    catch(error)
    {
        console.log(error);
    }
}

disp=(arr,number) =>
{
    try
      {
       for(var i=0;i<=number-1;i++)
          {
            console.log("sort elements are"  +arr[i]);
          }
       }

       catch(error)
       {
           console.log(error);
       }
}
}


module.exports=new Bubble();