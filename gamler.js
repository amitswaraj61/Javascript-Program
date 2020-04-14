const game=require('./Utility/Gamler');
var readline=require('readline-sync');
var stake=readline.question("enter the stake"+" ");
var goals=readline.question("enter the goals"+" ");
var trails=readline.question("enter the trails"+" ");
function validate()
{
    var pattern=/^[1-9][0-9]{0,}$/;
    if(pattern.test(stake) & pattern.test(goals) & pattern.test(trails))
    {
        game.gamler(stake,goals,trails);
    }
    else
    {
        console.log("give proper input");
    }
}
validate();



