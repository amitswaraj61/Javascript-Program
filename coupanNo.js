var generated_num=0;
var current_num=0;
function random() 
 { 
     while(true)
     {
        generated_num=(Math.floor(Math.random()*10000)+1);
        if(current_num!=generated_num)
        {
            current_num=generated_num;
            console.log(current_num);
        }
        else
        {
            break;
        }
     }
     
 }   
random();