//var testingObject = jQuery("td.alignNumbers"); 
//mystery tile randomisation...
let emptySet = new Set();  //start 
function GenerateNumber() {
  let x = Math.round(((Math.random() * 55) + 1), 0);
  //mystery tiles cannot fall on the start and finish tiles. 
  return x;
}
do {
  if (GenerateNumber() != 0 || GenerateNumber() != 55){
    emptySet.add(GenerateNumber()); 
  } 
}
while (emptySet.size < 10)
//eq value 0 - 14 tile 1 - 15 
//
var returnArray = emptySet.values(); 
var tile1 = returnArray.next().value;
var tile2 = returnArray.next().value;
var tile3 = returnArray.next().value; 
var tile4 = returnArray.next().value; 
var tile5 = returnArray.next().value;
var tile6 = returnArray.next().value; 
var tile7 = returnArray.next().value;
var tile8 = returnArray.next().value; 
var tile9 = returnArray.next().value;
var tile10 = returnArray.next().value; 
//if you want to randomise the values between each tile[x] variable..

//determine whether player would gain or lose points through this function. 
//1 to 11.. 
function MysteryBoxOutcome(){
  var number = Math.round(((Math.random() * 10) + 1), 0);
  return number; 
}

function MoneyLost() {
  var moneyLost = Math.round((Math.random() * 100000), 0); 
  return moneyLost; 
}

function Switcher () {
  var result = Math.round((Math.random()), 0);
  return result; 
  //if this function returns 1 go into msgStatusArrayPositive, else go into msgStatusArrayNegative. 
}

function GetMessage () {
  var msgStatusArrayNegative = ["Oh no! Yoou have encountered an unexpected robbery on the road!", "Oh no! You have just ran into a toll gate! You will now have to pay toll.", "Oh no! Due to bad weather, the expressway is now closed and you are going to be behind schedule! The director is not really happy with you being late!", "Oh no! The vehicle that you are currently riding has suddenly broke down! And currently you need to send your car in for repair!", "Oh no! You were caught for driving under the influence of alcohol! You were fined!", "Oh no! You were caught in a very serious traffic jam, and you were late. Your director at your company was not pleased.", "Oh no! due to a roadwork, you as the driver will have to take another route which is further!", "Oh no! You have just received news from your company that it is facing financial difficulties! Your boss would want you to pay some money to save the company.", "Oh no! Being a person who likes to drink and drive, you were arrested by the authorities for violating traffic laws!"];

  var msgStatusArrayPositive = ["Congratulations! You have just been awarded by your director for being able to deliver the things to him on time!", ""]; 
  if (Switcher() == 0){
    var msgStatusArrayNegativeIndex = Math.round((Math.random() * msgStatusArrayNegative.length), 0); 
    if (msgStatusArrayNegativeIndex == 0){
      //Find out how much money the robbers actually stole.
      var moneyStolen = MoneyLost();
      var authoritiesArrival = Math.round(Math.random(), 0); 
      var peopleOnStandby = Math.round((Math.random() * 20), 0); 
      //if authorities were to see this, return 1 for this variable, else zero. 
      if (authoritiesArrival == 0 && peopleOnStandby > 0){
        return msgStatusArrayNegative[0] + "\n" + "\n" + "You just lost $" + moneyStolen; 
      }
      else if (authoritiesArrival == 1 && peopleOnStandby > 0){
        var additionalString = "\n" + "But...." + "\n" + "Whew! The authorities managed to pass by and arrested those bad guys for their wrongdoings!";
        var numberOfPeopleCaught = Math.round((Math.random() * peopleOnStandby), 0); 
        var amountOfMoneyThatWasFinallyStolen = Math.round((Math.random() * moneyStolen), 0); 
        if (numberOfPeopleCaught != 0){
          if (numberOfPeopleCaught < peopleOnStandby){
            var furtherExtension = "\n" + "\n" + "But sadly.." + numberOfPeopleCaught + " robbers managed to get away!" + "\n" + "\n" + "unfortunately the robbers still managed to get away with $" + amountOfMoneyThatWasFinallyStolen + "\n" + "\n" + "Amount of money that was recovered was $" + (moneyStolen - amountOfMoneyThatWasFinallyStolen); 
          }
          else {
            var furtherExtension = "\n" + "\n" + "Thank god! All the robbers have been caught red-handed! No money was lost!"
            return msgStatusArrayNegative[0] + "\n" + "\n" + "You just lost $" + moneyStolen + additionalString + "\n" + "\n" + furtherExtension; 
          }
        }
      }
    }
    else if (msgStatusArrayNegativeIndex == 1){
      var tollFeeHigh = Math.round((Math.random() * 4.50 + 15), 2); 
      var tollFeeMedium = Math.round((Math.random() * 4.50 + 7.50), 2); 
      var tollFeeLow = Math.round((Math.random() * 4.50 + 3.75), 2); 
      var emptyList = []; 
      emptyList.push(tollFeeHigh); 
      emptyList.push(tollFeeMedium); 
      emptyList.push(tollFeeLow); 
      var index = Math.round((Math.random() * emptyList.length), 0); 
      if (index == 3){
        var tollFeePaid = emptyList[index - 1]; 
      }
      else {
        var tollFeePaid = emptyList[index]; 
      }
      return msgStatusArrayNegative[1] + "\n" + "\n" + "And you paid $" + tollFeePaid
    }
    else if (msgStatusArrayNegativeIndex == 2){
      var salaryDeducted = MoneyLost(); 
      var additionalMessage = ""; 
      var hoursLate = Math.round((Math.random() * 5), 1); 
      var decision = Math.round(Math.random(), 0); //whether to charge extra for hoursLate, or maybe not.... 
      if (decision == 1){
        return msgStatusArrayNegative[2] + "\n" + "\n" + "Your director just deducted $" + salaryDeducted + " from you for being late!"; 
      }
      else {
        return msgStatusArrayNegative[2] + "\n" + "\n" + "Your director just deducted $" + salaryDeducted + " from you for being late!"
      }
    }
    //Your vehicle broke down...
    else if (msgStatusArrayNegativeIndex == 3){
      var causeOfVehicularBreakDown = ["Car crash", "Car out of gas", "Car tyres punctured", "Car engine failure", "Car tyres deflated due to the fact that it has been a while since last trip to tyre pump"]; 
    }
    else if (msgStatusArrayNegativeIndex == 4){
      console.log("option 4"); 
    }
    else if (msgStatusArrayNegativeIndex == 5){
      console.log("option 5"); 
    }
    else if (msgStatusArrayNegativeIndex == 6){
      console.log("option 6"); 
    }
    else if (msgStatusArrayNegativeIndex == 7){
      console.log("option 7"); 
    }
    else if (msgStatusArrayNegativeIndex == 8){
      console.log("option 8"); 
    }
  }
}
console.log(GetMessage());

//this script will only work when the Roll button is clicked during the game, roll button will only be displayed after the start  
var face1 = jQuery("div#oneDot"); 
var face2 = jQuery("div#twoDot"); 
var face3 = jQuery("div#threeDot"); 
var face4 = jQuery("div#fourDot"); 
var face5 = jQuery("div#fiveDot"); 
var face6 = jQuery("div#sixDot"); 
let arr = new Array(); 
arr.push(face1); //0
arr.push(face2); //1
arr.push(face3); //2
arr.push(face4); //3
arr.push(face5); //4
arr.push(face6); //5

function GamePoints (player1points, player2points, player3points, player4points) {
  this.player1points = player1points; 
  this.player2points = player2points; 
  this.player3points = player3points; 
}
// Create 2 objects for the two players..
let gamePointsObject = new GamePoints(0, 0, 0); 

//one boolean value for each box. 
//if value equals to true, means that the marker is currently within that box. 
//Player1 marker 
let dataPlayer1 = [
    true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, gamePointsObject.player1points
  ]
//Player2 marker
let dataPlayer2 = [
    true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, gamePointsObject.player2points
  ]

//Player3 marker
let dataPlayer3 = [
    true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, gamePointsObject.player3points
  ]

let playerScores = { 
  "player1": dataPlayer1, 
  "player2": dataPlayer2, 
  "player3": dataPlayer3, 
}; 
  
var time = 0;
var timing = 0; 
//identify mystery tile. This only occurs once. Refreshing the page will not 
//only host can click on a button, but only ONCE per game session....
document.onreadystatechange = function(){
  if (document.readyState != "complete"){
    jQuery("#Loader").css({"display": "block"});
    jQuery("body").css({"overflow-x": "hidden", "overflow-y": "hidden"}); 
    //if the document is stuck at loading for more than 4000 milliseconds
    function TooLong() {
      jQuery("div#BaseForLoadingForMoreThan10Seconds").css({"display": "block"}); 
      jQuery("p#loadingTooLong").after('<p id = "countdown"> Page will reload in </p>'); 
      function Five () {
        jQuery("p#countdown").html('<p id = "countdown"> Page will reload in 5</p>'); 
      }
      setTimeout(Five, 1000); 
      function Four () {
        jQuery("p#countdown").html('<p id = "countdown"> Page will reload in 4</p>'); 
      }
      setTimeout(Four, 2000); 
      function Three () {
        jQuery("p#countdown").html('<p id = "countdown"> Page will reload in 3</p>'); 
      }
      setTimeout(Three, 3000); 
      function Two () { 
        jQuery("p#countdown").html('<p id = "countdown"> Page will reload in 2</p>'); 
      }
      setTimeout(Two, 4000); 
      function One () { 
        jQuery("p#countdown").html('<p id = "countdown"> Page will reload in 1</p>'); 
      }
      setTimeout(One, 5000); 
      function Reload () {
        window.location.reload(); 
      }
      setTimeout(Reload, 6000);
    }
    time = setTimeout(TooLong, 1000); 
  }
}
jQuery(document).ready(function(){ 
  jQuery("#Loader").css({"display": "none"}); 
  jQuery("body").css({"overflow-x": "scroll", "overflow-y": "scroll"});
  clearTimeout(time); 
  jQuery("button#quit").click(function(){
    alert("You will return to the homepage...."); 
    window.location.href = "https://MainPage.masterzy1234.repl.co"; 
    //delete player ID from the API... 

  }); 
  jQuery("button#Flip").css({"background-color": "white", "color": "midnightblue", "border-radius": "5px", "border-style": "solid", "transition": "background-color 1s, color 1s"}); 
  jQuery("button#Flip").on("mouseover", function(){
    jQuery("button#Flip").css({"background-color": "midnightblue", "color": "white", "cursor": "pointer"}); 
  }); 
  jQuery("button#Flip").on("mouseleave", function(){
    jQuery("button#Flip").css({"background-color": "white", "color": "midnightblue", "cursor": "default"}); 
  }); 
  jQuery("button#Flip").click(function(){
    //alter keyframes and animation of #card1 to #card169
    jQuery("button#Flip").prop({"disabled": true});
    jQuery("button#Flip").css({"cursor": "not-allowed"}); 
    jQuery("button#Flip").html("Starting game..."); 
    var target = document.querySelectorAll(".spaceOut"); 
    for (let index = 0; index <= target.length; index++){
      jQuery(target).eq(index).css({"animation-iteration-count": 1, "animation-duration": "0.05s", "animation-name": "newCard1", "animation-fill-mode": "forwards"}); 
    } 
    //game has already started...
    //at this point of time the program will go into the API and search for any online players
    var seekPlayers = {
      "async": true,
      "crossDomain": true,
      "url": "https://newdatabase1-1d27.restdb.io/rest/player-list",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      }
    }
    jQuery(seekPlayers).done(function(returnedResults){
      for (let index in returnedResults){
        
      }
    }); 
      //the Main function will keep on repeating throughout the game
      function Main () {
        jQuery("button#quit").click(function(){
          var decision = confirm("You sure you want to quit? You will leave this game and return to main homepage..."); 
          window.location.href = "https://MainPage.masterzy1234.repl.co";
        }); 
        jQuery("button#Flip").hide(); //hide the button
        jQuery("td.spaceOut").remove(); //remove the flipping tiles
        //creating a div container.... 
        jQuery("td.alignNumbers").eq(15).after('<td colspan = "13" rowspan = "13" style = "background-color: white; transition: opacity 1s"></td>'); 
        //Append some information inside....  
        jQuery("button#CheckPlayers").after('<button id = "Roll"> Roll Dice </button>'); 
        jQuery("button#Roll").css({"background-color": "green", "color": "white", "border-radius": "5px", "border-style": "solid", "width": "100%", "height": "50%"});
        //append message
        //user input username below.... 
        jQuery("div#BaseForUserGameNameCreation").css({"display": "flex"}); 
        jQuery("body").css({"overflow-y": "hidden"}); 
        jQuery("button#userCreateName").after("<br><br><label> Please enter your player name....<br><br><input type = \"text\" placeholder = \"Your player name here\" id = \"UserInputName\" required></label><br><br>"); 
        jQuery("button#userCreateName").on("click", function(){
          var inputLength = jQuery("input#UserInputName").val().length; 
          if (inputLength > 0){
            var actualInput = jQuery("input#UserInputName").val(); 
            jQuery("div#BaseForUserGameNameCreation").css({"display": "none"}); 
            //Add the players name onto the marker.... 
            //Add the player markers onto the map ON SQUARE ONE...
            jQuery("td.alignNumbers").eq(0).append('<div id = "Player1"></div>');
            jQuery("div#Player1").append(actualInput[0]); 
            //append the player's name to the full LocalLeaderboard table
            jQuery("td").eq(16).append('<h1 style = "text-align: center"><u><b>Local leaderboard</b></u></h1><br><table style = "background-color: white; border-style: solid id = "LocalLeaderboard"><tr><th>PlayerName</th><th>Score</th></tr><tr><td id = "P1">Empty</td><td id = "S1">0</td></tr></table><br><br>'); 
            jQuery("td#P1").html(actualInput); 
            jQuery("body").css({"overflow-y": "scroll"}); 
            jQuery('td.alignNumbers').eq(tile1).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile1).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex;">'); 
            jQuery('td.alignNumbers').eq(tile2).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile2).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile3).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile3).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile4).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile4).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile5).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile5).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile6).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile6).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile7).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile7).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile8).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile8).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile9).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile9).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
            jQuery('td.alignNumbers').eq(tile10).css({'background-color': 'red', 'font-weight': 'bold', 'color': 'white'});
            jQuery('td.alignNumbers').eq(tile10).append('<img src = "https://static.wixstatic.com/media/3e6e93_f03cb77a0c8f407e9b5e3b8ae5b3e629~mv2.png" alt = "Question Mark" style = "width: 50px; height: 50px; display: flex">');
          }
          else{
            jQuery("p#warning").after("<br><br><div style = \"width: 50%; text-align: center;background-color: red; color: white\">Sorry, this field cannot be left blank.</div>"); 
          }
        }); 
        jQuery("div.internalText").on("click", function(){
          jQuery("body").css({"overflow-y": "hidden"}); 
        }); 
        jQuery("button#Roll").css({"transition": "background-color 1s, color 1s"})
        jQuery("button#Roll").on("mouseover", function(){
          jQuery("button#Roll").css({"cursor": "pointer"}); 
          jQuery("button#Roll").css({"background-color": "green", "color": "lightgreen"}); 
        }); 
        jQuery("button#Roll").on("mouseleave", function(){
          jQuery("button#Roll").css({"cursor": "default"}); 
          jQuery("button#Roll").css({"background-color": "lightgreen", "color": "green"}); 
        }); 
        jQuery("button#Identifier").prop({"disabled": true});
        //as long as this button is clicked, execute the following.... 
        jQuery("button#Roll").on("click", function(){ 
          var getIndex = Math.round((Math.random() * 6), 0); 
          if (getIndex == 6){
            getIndex = getIndex - 1; 
          } 
          else {
            getIndex = getIndex; 
          }
          function GetActualItem () {
            return arr[getIndex]; 
          }
          var content = GetActualItem();
          jQuery("div#Base").css({"display": "flex"}); 
          function Automated (){
            jQuery("button#Identifier").prop({"disabled": false}); 
            jQuery("button#button").hide();
            jQuery("p#rollDiceText").hide(); 
            jQuery("div#info").html(content); 
            jQuery(content).css({"display": "flex"}); 
            jQuery(content).after("<p id = \"aText\"> You have now successfully rolled the dice. Please click on the 'I acknowledge' button to continue with the game. This screen will automatically close in 3 seconds </p>"); 
            jQuery("p#aText").css({"width": "100%", "background-color": "lightgreen", "color": "green", "text-align": "center"}); 
            function Countdown3 () {
              jQuery("div#info").append("<p id = \"countdown\" style = \"background-color: red; color: white; width: 100%; height: 50px; display: flex; flex-direction: row; justify-content: center; align-items: center;border-radius: 5px;\"><b>Closing in 3.<b></p>")
            }
            setTimeout(Countdown3, 1000)
            function Countdown2 () {
              jQuery("p#countdown").html("<b>Closing in 2..</b>"); 
            }
            setTimeout(Countdown2, 2000); 
            function Countdown1 () {
              jQuery("p#countdown").html("<b>Closing in 1...</b>")
            }
            setTimeout(Countdown1, 3000); 
            function CloseAutomatically () {
              jQuery("div#Base").css({"display": "none"}); 
            }
            setTimeout(CloseAutomatically, 4000); 
          }
          setTimeout(Automated, 250);
          //A variable named 'stepsToMove' will be responsible for the number of spaces that the marker will move on the board.
          //index numbers
          //0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 16 -> 18 -> 20 -> 22 -> 24 -> 26 -> 28 -> 30 -> 32 -> 34 -> 36 -> 38 -> 40 -> 55 -> 54 -> 53 -> 52 -> 51 -> 50 -> 49 -> 48 -> 47 -> 46 -> 45 -> 44 -> 43 -> 42 -> 41 -> 39 -> 37 -> 35 -> 31 -> 29 -> 27 -> 25 -> 23 -> 21 -> 19 -> 17 -> 15 
          //jQuery("td.alignNumbers").eq(0).append('<div id = "Player1"></div>')
          var stepsToMove = 0; 
          stepsToMove = arr.indexOf(content) + 1;  
          //convert innerHTML value to integer, 
          //add innerHTML value (current position) + stepsToMove = value [convert to innerHTML]
          var indexPosition; 
          if (jQuery("td.alignNumbers").find("div#Player1").length){
            indexPosition = jQuery("td.alignNumbers").index(); 
            //index number of the eq..
          }
          console.log(indexPosition); 
          var moves = stepsToMove; 
          var targetTileNo = parseInt(jQuery("td.alignNumbers").eq(indexPosition).html()) + moves;  
          //remove dot from initial position..... 
          jQuery("td.alignNumbers").eq(indexPosition).children().remove();
          var withImage = jQuery(".alignNumbers img"); 
          var full = jQuery(".alignNumbers")
          for (let indexPos = 0; indexPos < full.length; indexPos++){
            if (full.eq(indexPos).text() == targetTileNo){
              jQuery("td.alignNumbers").eq(indexPos).append('<div id = "Player1"></div>');
              jQuery("div#Player1").append(jQuery("input#UserInputName").val()[0]); 
            }
            else {
              for (let index = 0; index < withImage.length; index++){
                if (withImage.eq(index).children().text() == targetTileNo){
                  jQuery("td.alignNumbers").eq(index).append('<div id = "Player1"></div>'); 
                  jQuery("div#Player1").append(jQuery("input#UserInputName").val()[0]); 
                }
              }
            }
          }
          jQuery("button#Roll").prop({"disabled": true})
          jQuery("button#Roll").css({"cursor": "not-allowed"}); 
          function ButtonRollCountdown15 () {
            jQuery("button#Roll").html("<p id = \"ButtonRollIndicator\">You can roll again in 15 seconds."); 
          }
          setTimeout(ButtonRollCountdown15, 5000); 
          function ButtonRollCountdown14 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 14 seconds.."); 
          }
          setTimeout(ButtonRollCountdown14, 6000); 
          function ButtonRollCountdown13 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 13 seconds..."); 
          }
          setTimeout(ButtonRollCountdown13, 7000); 
          function ButtonRollCountdown12 () { 
            jQuery("p#ButtonRollIndicator").html("You can roll again in 12 seconds."); 
          }
          setTimeout(ButtonRollCountdown12, 8000); 
          function ButtonRollCountdown11 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 11 seconds.."); 
          }
          setTimeout(ButtonRollCountdown11, 9000); 
          function ButtonRollCountdown10 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 10 seconds..."); 
          }
          setTimeout(ButtonRollCountdown10, 10000); 
          function ButtonRollCountdown9 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 9 seconds."); 
          }
          setTimeout(ButtonRollCountdown9, 11000); 
          function ButtonRollCountdown8 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 8 seconds.."); 
          }
          setTimeout(ButtonRollCountdown8, 12000); 
          function ButtonRollCountdown7 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 7 seconds..."); 
          }
          setTimeout(ButtonRollCountdown7, 13000); 
          function ButtonRollCountdown6 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 6 seconds."); 
          }
          setTimeout(ButtonRollCountdown6, 14000); 
          function ButtonRollCountdown5() {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 5 seconds.."); 
          }
          setTimeout(ButtonRollCountdown5, 15000); 
          function ButtonRollCountdown4 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 4 seconds..."); 
          }
          setTimeout(ButtonRollCountdown4, 16000); 
          function ButtonRollCountdown3 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 3 seconds."); 
          }
          setTimeout(ButtonRollCountdown3, 17000); 
          function ButtonRollCountdown2 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 2 seconds.."); 
          }
          setTimeout(ButtonRollCountdown2, 18000); 
          function ButtonRollCountdown1 () {
            jQuery("p#ButtonRollIndicator").html("You can roll again in 1 second..."); 
          }
          setTimeout(ButtonRollCountdown1, 19000); 
          function EnableButton(){
            jQuery("button#Roll").prop({"disabled": false}); 
            jQuery("button#Roll").css({"cursor": "pointer"});
            jQuery("button#Roll").html("Roll Dice");  
            jQuery("button#Identifier").prop({"disabled": true}); 
            jQuery("button#Identifier").css({"cursor": "not-allowed"}); 
            jQuery("div#info").html('<p id = "rollDiceText">  Do take note that you have only 1 chance to roll the dice </p>'); 
          }
          setTimeout(EnableButton, 20000) 
        }); //Flip
      }
      setTimeout(Main, 10000);
  }); 
}); 

jQuery(document).ready(function(){
  jQuery("button#CheckPlayers").on("mouseleave", function(){
    jQuery("button#CheckPlayers").css({"background-color": "blue", "color": "white", "cursor": "default"}); 
  }); 
  jQuery("button#CheckPlayers").on("mouseover", function(){
    jQuery("button#CheckPlayers").css({"background-color": "white", "color": "blue", "cursor": "pointer"});
  }); 
  jQuery("button#CheckPlayers").on("click", function(){
    jQuery("div#BaseForHowToPlay").css({"display": "flex"}); 
    jQuery("body").css({"overflow-y": "hidden", "overflow-x": "hidden"}); 
  }); 
}); 

jQuery(document).ready(function(){
  jQuery("button#GiveFeedBack").css({"background-color": "tomato", "color": "white", "border-radius": "5px", "border-style": "solid", "transition": "background-color 1s, color 1s"}); 
  jQuery("button#GiveFeedBack").on("mouseover", function(){
    jQuery("button#GiveFeedBack").css({"background-color": "white", "color": "tomato", "cursor": "pointer"});
  });
  jQuery("button#GiveFeedBack").on("mouseleave", function(){
    jQuery("button#GiveFeedBack").css({"background-color": "tomato", "color": "white", "cursor": "default"});
  }); 
  jQuery("button#GiveFeedBack").click(function(){
    jQuery("div#BaseForSection").css({"display": "block"}); 
    jQuery("body").css({"overflow-y": "hidden", "overflow-x": "hidden"}); 
  }); 
}); 

//for the give feedback button 
jQuery(document).ready(function(){
  jQuery("button#exitScreen").on("mouseover", function(){
    jQuery("button#exitScreen").css({"cursor": "pointer"}); 
  });
  jQuery("button#exitScreen").on("mouseleave", function(){
    jQuery("button#exitScreen").css({"cursor": "pointer"}); 
  });  
  jQuery("button#exitScreen").on("click", function(){
    jQuery("div#BaseForSection").css({"display": "none"}); 
    jQuery("body").css({"overflow-y": "scroll", "overflow-x": "scroll"}); 
  });
  jQuery("div.internal").on("click", function(){
    jQuery("div#BaseForSection").css({"display": "none"}); 
    jQuery("body").css({"overflow-y": "scroll", "overflow-x": "scroll"});
  });
}); 

//For the how to play button 
jQuery(document).ready(function(){
  jQuery("button#exitHowToPlayScreen").on("mouseover", function(){
    jQuery("button#exitHowToPlayScreen").css({"cursor": "pointer"}); 
  });
  jQuery("button#exitHowToPlayScreen").on("mouseleave", function(){
    jQuery("button.exit").css({"cursor": "pointer"}); 
  });  
  jQuery("button#exitHowToPlayScreen").on("click", function(){
    jQuery("div#BaseForHowToPlay").css({"display": "none"}); 
    jQuery("body").css({"overflow-y": "scroll", "overflow-x": "scroll"});
  });
  jQuery("div.internal").on("click", function(){
    jQuery("div#BaseForHowToPlay").css({"display": "none"}); 
    jQuery("body").css({"overflow-y": "scroll", "overflow-x": "scroll"});
  });
});

jQuery(document).ready(function(){
  jQuery("button#QuitGameDueToInsufficientWidth").on("mouseover", function(){

  }); 
  jQuery("button#QuitGameDueToInsufficientWidth").on("mouseleave", function(){

  });
  jQuery("button#QuitGameDueToInsufficientWidth").on("click", function(){
    
  }); 
}); 

jQuery(document).ready(function(){
  jQuery("button#QuitGameDueToInsufficientWidth").on("mouseover", function(){

  }); 
  jQuery("button#QuitGameDueToInsufficientWidth").on("mouseleave", function(){

  });
  jQuery("button#QuitGameDueToInsufficientWidth").on("click", function(){
    
  }); 
}); 

//give information about the colors that the user can choose from.
//all 9 colors... 
jQuery(document).ready(function(){
  jQuery("div#color1").on("mouseover", function(){
    jQuery("div#color1").after("<p id = \"color1Info\"style = \"width: 100px; height: 100px; position: absolute; background-color: white; border-radius: 5px; border-style: solid; margin-top: 25px;\">Color</p>")
  });
  jQuery("div#color1").on("mouseleave", function(){
    jQuery("p#color1Info").css({"display": "none"}); 
  });  
  jQuery("p#color1Info").on("mouseover", function(){
    jQuery("p#color1Info").css({"display": "flex"}); 
  }); 
}); 
//javascript end 
 

