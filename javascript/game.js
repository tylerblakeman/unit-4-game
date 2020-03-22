var ruby;
var diamond;
var topaz;
var emerald;
var numberToMatch;
var wins;
var losses;
var totalScore = 0;


getRandomNumber();


//function to generate the random number to be matched between 50 and 100
function getRandomNumber(){
    //generating a random number 19 - 120
    numberToMatch = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    //generating random numbers between 1 and 12 for each of the gemstones
    ruby = Math.floor(Math.random() * (12-1 + 1)) + 1;
    diamond = Math.floor(Math.random() * (12-1 + 1)) + 1;
    topaz = Math.floor(Math.random() * (12-1 + 1)) + 1;
    emerald = Math.floor(Math.random() * (12-1 + 1)) + 1;
    console.log("this is the random number you're looking for", numberToMatch)
    console.log("ruby: ", ruby);
    console.log("diamond: ", diamond);
    console.log("topaz: ", topaz);
    console.log("emerald: ", emerald)
    //outputting the score to match to html
    $(".scoreToMatch").html(numberToMatch)
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

function reset(){
    totalScore = 0;
    getRandomNumber();
}

$(".ruby").click(function(){
    totalScore = totalScore + ruby;
    console.log("ruby")
    console.log(ruby)
    $(".userScore").html(totalScore)
});

$(".diamond").click(function(){
    totalScore = totalScore + diamond;
    console.log("diamond")
    console.log(diamond)
    $(".userScore").html(totalScore)
});

$(".topaz").click(function(){
    totalScore = totalScore + topaz;
    console.log("topaz")
    console.log(topaz)
    $(".userScore").html(totalScore)
});

$(".emerald").click(function(){
    totalScore = totalScore + emerald;
    console.log("emerald")
    console.log(emerald)
    $(".userScore").html(totalScore)
});