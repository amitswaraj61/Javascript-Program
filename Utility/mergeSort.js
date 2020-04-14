class Merge
{
Merge_Sort=(arr,l,r) =>
{
 try
    {
    if(l < r)
      {
        var m= (l+r)/2;
        Merge_Sort(arr, l, m);
        Merge_Sort(arr, m+1, r);
        Merg(arr, l, m, r);
      }
    }
    catch(error)
    {
        console.log(error);
    }
}    
Merg=(arr, l, m, r) =>
{
   try
   {
    var n1= m -l + 1;
    var n2=r - m;

    var L=new Array([n1]);
    var R=new Array([n2]);

    for(var i=0;i<n1;++i)
    {
        L[i]=arr[l+i];
    } 
    for(var j=0;j<n2;++j)
    {
        R[j]=arr[m + 1+ j];
    } 
    var i=0;
    var j=0;
    var k=l;
    while(i < n1 && j < n2)
    {
        if(L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while(i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }
    while(j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}
    catch(error)
    {
        console.log(error);
    }
}    

Display=(arr) =>
{
 try
 {
    var n=arr.length;
    for(var i=0;i<n;++i)
    {
        console.log(arr[i]+" ");
        console.log();
    }
  }
    catch(error)
    {
        console.log(error);
    }
}

}

module.exports=new Merge();
