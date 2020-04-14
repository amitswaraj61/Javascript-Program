binary_Search=(arr,k) =>
{
    try {

    var low=0;
    var mid=0;
    var high=arr.length-1;
    while(low<=high)
    {
        mid=(low+high)/2;
        if(arr[mid]<k)
        {
            low=mid+1;
        }
        else if(arr[mid]>k)
        {
            high=mid-1;
        }
        else if(arr[mid]==k)
        {
           return mid; 
        }
    }
    return -1;
}
catch(error)
{
    console.log(error);
}
}

module.exports=binary_Search;
