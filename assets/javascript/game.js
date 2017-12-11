var counter = 0;
var targetNumber = "";
var wins = 0;
var losses = 0;

var random = Math.floor(Math.random() * 120);
targetNumber = random + targetNumber;


// on click for blue crystal
$('#random').text(targetNumber);

$('.btc0').on('click', function () {
    
    counter += 7 
    document.querySelector('#score').innerHTML = counter;
    if (counter === random) {
        document.querySelector('#result').innerHTML = ('You win!');
        wins++;
        document.querySelector('#wins').innerHTML = wins;
        document.querySelector('#alertSpot').innerHTML = ('<div class="alert alert-success" role="alert">...</div>')
        
    }
    else if (counter > random) {
        losses++;
        document.querySelector('#losses').innerHTML = losses;
    }

    
});
// on click for green crystal
$('.btc1').on('click', function () {
    
    counter -= 3
    document.querySelector('#score').innerHTML = counter;
    if (counter === random) {
        document.querySelector('#result').innerHTML = ('You win!');
        wins++;
        document.querySelector('#wins').innerHTML = wins;
    }
    else if (counter > random) {
        losses++;
        document.querySelector('#losses').innerHTML = losses;
    }
});
// on click for red crystal
$('.btc2').on('click', function () {

    counter -= 2
    document.querySelector('#score').innerHTML = counter;
    if (counter === random) {
        document.querySelector('#result').innerHTML = ('You win!');
        wins++;
        document.querySelector('#wins').innerHTML = wins;
    }
    else if (counter > random) {
        losses++;
        document.querySelector('#losses').innerHTML = losses;
    }
});
// on click for yellow crystal
$('.btc3').on('click', function() {

    counter += 5
    document.querySelector('#score').innerHTML = counter;
    if (counter === random) {
        document.querySelector('#result').innerHTML = ('You win!');
        wins++;
        document.querySelector('#wins').innerHTML = wins;
    }
    else if (counter > random) {
        losses++;
        document.querySelector('#losses').innerHTML = losses;
    }
});