class insertion
{    
    
insertion_Sort=(arr,number) =>
{
    try {
        
    for(var i=1;i<=number-1;i++)
    {
        var item=arr[i];

    for(var j=i-1;j>=0 && arr[j]>item;--j)
    {
        arr[j+1]=arr[j];
    }
        arr[j+1]=item;
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
             console.log("sort elements are" +  arr[i]);
          }
    }
    catch(error)
    {
        console.log(error);
    }
}

}


module.exports=new insertion();