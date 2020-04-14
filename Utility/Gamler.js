class Gamler
{
    gamler=(stake,goals,trails) =>
    {
     try
      {
        var bets=0;
        var wins=0;
        for(var i=0;i<trails;i++)
          {
             var cash=stake;
             while(cash>0 && cash<goals)
                {
                  bets++;
                  if(Math.random()<0.51)
                    {
                        cash++;
                    }
                  else
                    { 
                        cash--;
                    }
                }
           if(cash==goals)
             {
             wins++;
             }
        }
    
console.log("win of" +wins);
console.log("the winning percentage is\n");
console.log(wins/trails*100);
console.log("loss percentage\c");
console.log((trails-wins)/trails*100);

}
    catch(error)
    {
        console.log(error);
    }
}
}

module.exports=new Gamler();