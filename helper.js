//Helper functions: These should be used repeatedly throughout your program.

//Will close the terminal when you are done and have found your result.
function end(){
    terminal.close();
}

/*Acts a prompt to alert the user how and what to type in.
  This is intended to help you with Question 3.
*/
function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}
/*Upon entering user input, it will store the information as a string
  This chops up the string into smaller strings and puts them in an array,
  Then converts each substring into its number form

  note that if you try and convert n, the program will produce NaN = Not a Number
  */
function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}


/*String handeling

  Every question receives a string as input.  Since you know that strings can be upper (65 -90) or lower (97 - 122), it helps your program if it is all in one case.

  Use str.toLowerCase() to automatically change str to a lower case character.
  Make this the immediate first step after each question.
*/
terminal.question("My question?", function(str){
    //If I typed in "Motion"
    str.toLowerCase();
    //Now str == "motion";
});
