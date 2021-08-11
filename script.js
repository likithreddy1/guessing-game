var guessedElement = Math.floor(Math.random()*100+1); 
var attempts = 1;
function guessing()
{
  var userInput = document.getElementById("input").value;
  if(userInput == guessedElement)
    {
      alert("Got the answer in "+ attempts + " attempts");
    }
  else if(userInput > guessedElement)
    {
      alert("Guess a smaller number");
      attempts++;
    }
  else{
    alert("Guess a greater number");
      attempts++;
  }
}
