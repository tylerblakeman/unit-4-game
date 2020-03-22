var ruby;
var diamond;
var topaz;
var emerald;
var numberToMatch;
var wins = 0;
var losses = 0;
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
    //outputting the score to match to html
    $(".scoreToMatch").html(numberToMatch)
}
    
function checkScore(){
    if (totalScore == numberToMatch){
        alert("You WIN!");
        wins++;
        reset();
        $(".winDisplay").html(wins);
        totalScore = 0;
    }
    else if (totalScore > numberToMatch){
        alert("You lose!");
        losses++;
        reset();
        $(".lossDisplay").html(losses);
        totalScore = 0;
    }
}

function reset(){
    totalScore = 0;
    getRandomNumber();
    $(".userScore").html(0);
    alert("Select a jewel.")
}


$(".ruby").click(function(){
    totalScore = totalScore + ruby;
    console.log("ruby")
    console.log(ruby)
    $(".userScore").html(totalScore)
    checkScore();
});

$(".diamond").click(function(){
    totalScore = totalScore + diamond;
    console.log("diamond")
    console.log(diamond)
    $(".userScore").html(totalScore)
    checkScore();
});

$(".topaz").click(function(){
    totalScore = totalScore + topaz;
    console.log("topaz")
    console.log(topaz)
    $(".userScore").html(totalScore)
    checkScore();
});

$(".emerald").click(function(){
    totalScore = totalScore + emerald;
    console.log("emerald")
    console.log(emerald)
    $(".userScore").html(totalScore)
    checkScore();
});
