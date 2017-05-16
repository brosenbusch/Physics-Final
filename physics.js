const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
    if(str=="motion"){
        terminal.question("Which variable are you solving for?"),function(str){
            if(str=="d"){
                terminal.question("Do you know acceleration?"),function(str){
                    if(str=="no"){
                        motion.distance1();//finish later
                    }
                    else{
                        motion.distance2();
                    }
                }
            }
            else if(str=="v"){
                terminal.question("Do you know acceleration?"),function(str){
                    if(str=="no"){
                        motion.velocity1();//finish later
                    }
                    else{
                        motion.velocity2();
                    }
                }
            }
            else if(str=="t"){
                motion.time();
            }
            else if(str=="a")
        }
    }
    else if(str=="energy"){

    }
    //you will configure your series of questions inside here.


});
