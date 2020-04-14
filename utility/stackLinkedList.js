var Stack= function () {
  
  this.count=0;
  this.storage = {};
}
try{

Stack.prototype.push = function(val) {
  this.storage[this.count]=val;
  this.count++;
  return this.storage;
  }
}
catch(error)
{
  console.log(error);
}

module.exports=new Stack();



