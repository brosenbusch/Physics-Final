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
        terminal.question("Which variable are you solving for?"),function(str){
            if(str=="d"){
                terminal.question("What do you know?"),function(array){
                    printOptions();
                    if(Number.isNaN(array[2])){
                      console.log(motion.distance1(array[1],array[3]));
                      end();

                    }
                    else{
                        console.log(motion.distance2(array[1],array[2],array[3]));
                        end();
                    }
                }

            }

            else if(str=="v"){
                terminal.question("What do you know?"),function(str){
                    printOptions();
                    if(Number.isNaN(array[2])){
                        console.log(motion.velocity1(array[0],array[3]));
                        end();
                    }
                    else{
                        motion.velocity2(array[1],array[2],array[3]);
                        end();
                    }
                }
            }
            else if(str=="t"){
                motion.time(array[0],array[1]);
                end();
            }
            else if(str=="a"){
                motion.acceleration(arry[1],array[3]);
                end();
            }
        }
    }
    else if(str=="energy"){
        terminal.question("Which variable are you solving for?"),function(str){
            if(str=="ke"){
                printOptions();
                console.log(energy.kineticEnergy(array[4],array[1]))
                end();
            }
            else if(str=="m"){
                printOptions();
                console.log(energy.mass(array[5],array[1]))
                end();
            }
            else if(str=="v"){
                printOptions();
                console.log(energy.velocity(array[5],array[4]))
                end();
            }
        }



    }
    //you will configure your series of questions inside here.


});
