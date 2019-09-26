
    var wins= 0;
    var losses= 0;
    var guessesLeft= 8;
    var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var lettersGuessed= [];
    var computerGuess= computerLetter[Math.floor(Math.random()*computerLetter.length)];
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var lettersGuessedText = document.getElementById("guessed-text");
    var guessesLeftText = document.getElementById("guessesleft-text");

    function restart(){
        guessesLeft= 8;
        lettersGuessed= [];
        var computerGuess= computerLetter[Math.floor(Math.random()*computerLetter.length)];
        console.log(computerGuess);
    }
    restart();
    

   
    document.onkeyup = function(event){
        var userGuess = event.key.toLowerCase();
        lettersGuessed.push(userGuess);  
        
        if(userGuess === computerGuess){
           
            wins ++; 
            alert("You win!");
            restart();     
         }
         else{
             guessesLeft --;  
             console.log(userGuess);          
         }
         if (guessesLeft === 0){
             alert("You lose!")
             losses++;
             guessesLeft=8;
             restart();
             }
              
        
    
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses:" + losses;
lettersGuessedText.textContent = "Letters Guessed: "+ lettersGuessed.join(',');
guessesLeftText.textContent = "Guesses remaining: " + guessesLeft;
    }
    

  




        

        
   