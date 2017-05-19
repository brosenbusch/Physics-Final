const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");
}
function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}


  function end(){
      terminal.close();
  }


terminal.question("What type of equation are you looking for?",function(str){
    if(str=="motion"){
        terminal.question("Which variable are you solving for?",function(str1){
            if(str1=="d"){
                printOptions();
                terminal.question("What do you know?",function(str){
                    if(Number.isNaN(str[2])){
                        convertToArray(str);
                        console.log(motion.distance1(str[1],str[3]));
                        end();

                    }
                    else{
                        convertToArray(str);
                        console.log(motion.distance2(str[1],str[2],str[3]));
                        end();
                    }
                });

            }

            else if(str1=="v"){
                printOptions();
                terminal.question("What do you know?",function(str){
                    if(Number.isNaN(str[2])){
                        convertToArray(str);
                        console.log(motion.velocity1(str[0],str[3]));
                        end();
                    }
                    else{
                        convertToArray(str);
                        console.log(motion.velocity2(str[1],str[2],str[3]));
                        end();
                    }
                });
            }
            else if(str1=="t"){
                convertToArray(str);
                console.log(motion.time(str[0],str[1]));
                end();
            }
            else if(str1=="a"){
                convertToArray(str);
                console.log(motion.acceleration(str[1],str[3]));
                end();
            }
        });
    }
    else if(str=="energy"){
        terminal.question("Which variable are you solving for?",function(str){
            printOptions();
            if(str=="ke"){
                convertToArray(str);
                console.log(energy.kineticEnergy(str[4],str[1]))
                end();
            }
            else if(str=="m"){
                convertToArray(str);
                console.log(energy.mass(str[5],str[1]))
                end();
            }
            else if(str=="v"){
                convertToArray(str);
                console.log(energy.velocity(str[5],str[4]))
                end();
            }
        });



    }
    //you will configure your series of questions inside here.


});
