var ruby;
var diamond;
var topaz;
var emerald;
var numberToMatch;
var wins;
var losses;
var totalScore;










getRandomNumber();







//function to generate the random number to be matched between 50 and 100
function getRandomNumber(){
    //generating a random number 19 - 120
    var numberToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //generating random numbers between 1 and 12 for each of the gemstones
    var ruby = Math.floor(Math.random() * (12-1 + 1)) + 1;
    var diamond = Math.floor(Math.random() * (12-1 + 1)) + 1;
    var topaz = Math.floor(Math.random() * (12-1 + 1)) + 1;
    var emerald = Math.floor(Math.random() * (12-1 + 1)) + 1;
    console.log("this is the random number you're looking for", numberToMatch)
    console.log("ruby: ", ruby);
    console.log("diamond: ", diamond);
    console.log("topaz: ", topaz);
    console.log("emerald: ", emerald)
}
    
function checkScore(){
    if (totalScore == numberToMatch){
        alert("You WIN!");
        wins++;
        reset();
    }
    else if (totalScore > numberToMatch){
        alert("You lose!");
        losses++;
        reset();
    }
}

function displayReset(){
    alert("You win")
    reset()
}

function reset(){
    totalScore = 0;
    getRandomNumber();

}