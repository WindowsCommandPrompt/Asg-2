jQuery(document).ready(function(){ 
  jQuery("body").css({"opacity": 0, "display": "none"}); 
  function DisplayToBlock(){
    jQuery("body").css({"display": "block"}); 
  }
  setTimeout(DisplayToBlock, 300);
  function Show(){ 
    jQuery("body").css({"opacity": 1}); 
  } 
  setTimeout(Show, 1050);
});

//check localStorage...
var something = localStorage.getItem("username");

if (something != null){
  jQuery("div.Switcher").css({"display": "none"});
}

jQuery("button.buttonFormatting").eq(0).on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  function Redirect(){
    window.location.href = "https://MainPage.masterzy1234.repl.co/Sudoku/sudoku.html"; 
  }
  setTimeout(Redirect, 1000); 
}); 

jQuery("button.buttonFormatting").eq(1).on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  function Redirect(){
    window.location.href = "https://MainPage.masterzy1234.repl.co/minesweeper.html"; 
  }
  setTimeout(Redirect, 1000);
}); 

//Lazy navigation(using keybinds to navigate around the page)
//if the i key was pressed. 
//'M' key to the multiplayer tab 
//'S' key to the singleplayer tab 
//'D' key to the 'DailyRewards' tab 
//'B' key to the 'Buy power ups for games
jQuery(window).on("keydown", function(event){
  var keyPressed = event.key; 
  if (keyPressed == "i"){
    jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
    jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
    jQuery("div#introduction").css({"background-color": "orange", "color": "black"}); 
    //copy and paste this part below........LOL
    jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
    jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"})
    jQuery("div.notAvailable").css({"opacity": 0}); 
    jQuery("div.Box").eq(4).css({"opacity": 0}); 
    jQuery("div.Box").eq(3).css({"opacity": 0});
    jQuery("div.Box").eq(2).css({"opacity": 0}); 
    jQuery("div.Box").eq(1).css({"opacity": 0}); 
    function DISAPPEARLOR(){
      jQuery("div#informationMultiplayer").css({"display": "none"}); 
      jQuery("div#informationSingleplayer").css({"display": "none"}); 
      jQuery("div#informationPowerUps").css({"display": "none"});
      jQuery("div#informationDailyRewards").css({"display": "none"}); 
    }
    setTimeout(DISAPPEARLOR, 1050)
    function DISPLAYLAHHH(){
      jQuery("div#informationLanding").css({"display": "flex"});
      jQuery("div.Box").eq(0).css({"opacity": 0});  
    } 
    setTimeout(DISPLAYLAHHH, 1075);
    function APPEARLAHHH(){
      jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 1)"});
      jQuery("div.Box").eq(0).css({"opacity": 1});  
    }
    setTimeout(APPEARLAHHH, 1100);
  }
}); 

jQuery(window).on("keydown", function(event){
  var keyPressed = event.key;
  if (keyPressed == "m"){
    jQuery("div#multiplayer").css({"background-color": "orange", "color": "black"});
    jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
    jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
    jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
    //copy and paste this part below........LOL
    jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
    jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"})
    jQuery("div#RedirectToSudokuGame").css({"opacity": 0}); 
    jQuery("div#RedirectToMinesweeperGame").css({"opacity": 0}); 
    jQuery("div.notAvailable").css({"opacity": 0}); 
    jQuery("div.Box").eq(4).css({"opacity": 0}); 
    jQuery("div.Box").eq(3).css({"opacity": 0});
    jQuery("div.Box").eq(2).css({"opacity": 0}); 
    jQuery("div.Box").eq(0).css({"opacity": 0}); 
    function DISAPPEARLOR(){
      jQuery("div#informationLanding").css({"display": "none"}); 
      jQuery("div#informationSingleplayer").css({"display": "none"}); 
      jQuery("div#informationPowerUps").css({"display": "none"});
      jQuery("div#informationDailyRewards").css({"display": "none"}); 
    }
    setTimeout(DISAPPEARLOR, 1050)
    function DISPLAYLAHHH(){
      jQuery("div#informationMultiplayer").css({"display": "flex"});
      jQuery("div.Box").eq(1).css({"opacity": 0});  
    } 
    setTimeout(DISPLAYLAHHH, 1075);
    function APPEARLAHHH(){
      jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 1)"});
      jQuery("div.Box").eq(1).css({"opacity": 1});  
    }
    setTimeout(APPEARLAHHH, 1100);
  }
}); 

jQuery(window).on("keydown", function(event){
  var keyPressed = event.key;
  if (keyPressed == "s"){
    jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#singleplayer").css({"background-color": "orange", "color": "black"});
    jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
    jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
    jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
    //LOL
    jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
    jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div.Box").eq(4).css({"opacity": 0}); 
    jQuery("div.Box").eq(3).css({"opacity": 0});
    jQuery("div.Box").eq(1).css({"opacity": 0}); 
    jQuery("div.Box").eq(0).css({"opacity": 0}); 
    function DISAPPEARLOR(){
      jQuery("div#informationMultiplayer").css({"display": "none"}); 
      jQuery("div#informationPowerUps").css({"display": "none"});
      jQuery("div#informationDailyRewards").css({"display": "none"}); 
      jQuery("div#informationLanding").css({"display": "none"}); 
    }
    setTimeout(DISAPPEARLOR, 1050)
    function DISPLAYLAHHH(){
      jQuery("div#informationSingleplayer").css({"display": "flex"}); 
      jQuery("div.Box").eq(2).css({"opacity": 0});
    } 
    setTimeout(DISPLAYLAHHH, 1075);
    function APPEARLAHHH(){
      jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 1)"}); 
      jQuery("div.Box").css({"opacity": 1}); 
      jQuery("div#RedirectToSudokuGame").css({"opacity": 1}); 
      jQuery("div#RedirectToMinesweeperGame").css({"opacity": 1}); 
      jQuery("div.notAvailable").eq(1).css({"opacity": 1}); 
    }
    setTimeout(APPEARLAHHH, 1100);
  }
}); 

jQuery(window).on("keydown", function(event){
  var keyPressed = event.key;
  if (keyPressed == "d"){
    jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#dailyRewards").css({"background-color": "orange", "color": "black"});
    jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
    jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
    //LOL
    jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
    jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#RedirectToSudokuGame").css({"opacity": 0}); 
    jQuery("div#RedirectToMinesweeperGame").css({"opacity": 0}); 
    jQuery("div.notAvailable").css({"opacity": 0}); 
    jQuery("div.Box").eq(4).css({"opacity": 0}); 
    jQuery("div.Box").eq(2).css({"opacity": 0});
    jQuery("div.Box").eq(1).css({"opacity": 0}); 
    jQuery("div.Box").eq(0).css({"opacity": 0}); 
    function DISAPPEARLOR(){
      jQuery("div#informationMultiplayer").css({"display": "none"}); 
      jQuery("div#informationPowerUps").css({"display": "none"});
      jQuery("div#informationSingleplayer").css({"display": "none"}); 
      jQuery("div#informationLanding").css({"display": "none"})
    }
    setTimeout(DISAPPEARLOR, 1050)
    function DISPLAYLAHHH(){
      jQuery("div#informationDailyRewards").css({"display": "flex"}); 
      jQuery("div.Box").eq(3).css({"opacity": 0});
    } 
    setTimeout(DISPLAYLAHHH, 1075);
    function APPEARLAHHH(){
      jQuery("div.Box").eq(3).css({"opacity": 1}); 
      jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 1)"}); 
    }
    setTimeout(APPEARLAHHH, 1100);
  }
}); 

jQuery(window).on("keydown", function(event){
  var keyPressed = event.key; 
  if (keyPressed == "b"){
    jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
    jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
    jQuery("div#buyPowerUps").css({"background-color": "orange", "color": "black"});
    jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
    //LOL
    jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"});
    jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"}); 
    jQuery("div#RedirectToSudokuGame").css({"opacity": 0}); 
    jQuery("div#RedirectToMinesweeperGame").css({"opacity": 0}); 
    jQuery("div.notAvailable").css({"opacity": 0}); 
    jQuery("div.Box").eq(3).css({"opacity": 0}); 
    jQuery("div.Box").eq(2).css({"opacity": 0});
    jQuery("div.Box").eq(1).css({"opacity": 0}); 
    jQuery("div.Box").eq(0).css({"opacity": 0}); 
    function DISAPPEARLOR(){
      jQuery("div#informationMultiplayer").css({"display": "none"}); 
      jQuery("div#informationSingleplayer").css({"display": "none"});
      jQuery("div#informationDailyRewards").css({"display": "none"}); 
      jQuery("div#informationLanding").css({"display": "none"}); 
    }
    setTimeout(DISAPPEARLOR, 1050)
    function DISPLAYLAHHH(){
      jQuery("div#informationPowerUps").css({"display": "flex"}); 
      jQuery("div.Box").eq(4).css({"opacity": 0});
    } 
    setTimeout(DISPLAYLAHHH, 1075);
    function APPEARLAHHH(){
      jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 1)"}); 
      jQuery("div.Box").eq(4).css({"opacity": 1});
    }
    setTimeout(APPEARLAHHH, 1100);
  }
}); 

//load the information into the span tag from the API as soon as the user logs in (CHECK WHETHER THE USER HAS ALREADY LIKED THE GAME OR NOT)
var someKindOfSettings = {
  "async": true,
  "crossDomain": true,
  "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "61d254f5ccd0211b32089499",
    "cache-control": "no-cache"
  }
}

var minesweeperDislikeSwitch;
var minesweeperLikeSwitch; 
var sudokuDislikeSwitch;
var sudokuLikeSwitch; 

jQuery.ajax(someKindOfSettings).done(function(giveMeWhatIWant){
  for(let lol = 0; lol < giveMeWhatIWant.length; lol++){
    if (giveMeWhatIWant[lol].username == something){
      for (let lolAgain = 0; lolAgain < giveMeWhatIWant[lol].gamesLiked.length; lolAgain++){
        if (giveMeWhatIWant[lol].gamesLiked[lolAgain].gameName == "Minesweeper"){
          minesweeperDislikeSwitch = giveMeWhatIWant[lol].gamesLiked[lolAgain].Disliked;
          minesweeperLikeSwitch = giveMeWhatIWant[lol].gamesLiked[lolAgain].Liked; 
        }
        else if (giveMeWhatIWant[lol].gamesLiked[lolAgain].gameName == "Sudoku"){
          sudokuDislikeSwitch = giveMeWhatIWant[lol].gamesLiked[lolAgain].Disliked;
          sudokuLikeSwitch = giveMeWhatIWant[lol].gamesLiked[lolAgain].Liked; 
        }
      }
    }
  }
  if (minesweeperDislikeSwitch == true){
    jQuery("i#thumbsDownMinesweeper").css({"color": "red"}); 
  }
  else if (minesweeperLikeSwitch == true){
    jQuery("i#thumbsUpMinesweeper").css({"color": "green"}); 
  }
  else if (sudokuDislikeSwitch == true){
    jQuery("i#thumbsDownSudoku").css({"color": "red"}); 
  }
  else if (sudokuLikeSwitch == true){
    jQuery("i#thumbsUpSudoku").css({"color": "green"}); 
  }
}); 

var anotherSettings = {
  "async": true,
  "crossDomain": true,
  "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "61d254f5ccd0211b32089499",
    "cache-control": "no-cache"
  }
}

var existingSudokuDislikes;
var existingSudokuLikes;
var existingMinesweeperDislikes;
var existingMinesweeperLikes;

jQuery.ajax(anotherSettings).done(function(giveMeNow){
  for(let haha = 0; haha < giveMeNow.length; haha++){
    if (giveMeNow[haha].gameType == "Sudoku"){
      existingSudokuDislikes = giveMeNow[haha].Dislikes;
      existingSudokuLikes = giveMeNow[haha].Likes; 
    }
    else if (giveMeNow[haha].gameType == "Minesweeper"){
      existingMinesweeperDislikes = giveMeNow[haha].Dislikes;
      existingMinesweeperLikes = giveMeNow[haha].Likes; 
    }
  }
  jQuery("span#LikeMinesweeper").html(existingMinesweeperLikes); 
  jQuery("span#DislikeMinesweeper").html(existingMinesweeperDislikes);
  jQuery("span#LikeSudoku").html(existingSudokuLikes);
  jQuery("span#DislikeSudoku").html(existingSudokuDislikes); 
}); 

//when leaving this page...
jQuery("div.navElement").eq(0).on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  function GOBACKLAH(){
    window.location.href = "https://MainPage.masterzy1234.repl.co"; 
  }
  setTimeout(GOBACKLAH, 1000); 
}); 

jQuery("div.navElement").eq(1).on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  function GOBACKLAH(){
    window.location.href = "https://MainPage.masterzy1234.repl.co/gamesPage.html"; 
  }
  setTimeout(GOBACKLAH, 1000); 
}); 

jQuery("div.navElement").eq(2).on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  function GOBACKLAH(){
    window.location.href = "https://MainPage.masterzy1234.repl.co/contactPage.html"
  }
}); 

jQuery("div#introduction").on("click", function(){
  jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
  jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
  jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
  jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
  jQuery(this).css({"background-color": "orange", "color": "black"}); 
  //copy and paste this part below........LOL
  jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
  jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"})
  jQuery("div.notAvailable").css({"opacity": 0}); 
  jQuery("div.Box").eq(4).css({"opacity": 0}); 
  jQuery("div.Box").eq(3).css({"opacity": 0});
  jQuery("div.Box").eq(2).css({"opacity": 0}); 
  jQuery("div.Box").eq(1).css({"opacity": 0}); 
  function DISAPPEARLOR(){
    jQuery("div#informationMultiplayer").css({"display": "none"}); 
    jQuery("div#informationSingleplayer").css({"display": "none"}); 
    jQuery("div#informationPowerUps").css({"display": "none"});
    jQuery("div#informationDailyRewards").css({"display": "none"}); 
  }
  setTimeout(DISAPPEARLOR, 1050)
  function DISPLAYLAHHH(){
    jQuery("div#informationLanding").css({"display": "flex"});
    jQuery("div.Box").eq(0).css({"opacity": 0});  
  } 
  setTimeout(DISPLAYLAHHH, 1075);
  function APPEARLAHHH(){
    jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 1)"});
    jQuery("div.Box").eq(0).css({"opacity": 1});  
  }
  setTimeout(APPEARLAHHH, 1100);
}); 

jQuery("div#multiplayer").on("click", function(){
  jQuery(this).css({"background-color": "orange", "color": "black"});
  jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
  jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
  jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
  jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
  //copy and paste this part below........LOL
  jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
  jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"})
  jQuery("div#RedirectToSudokuGame").css({"opacity": 0}); 
  jQuery("div#RedirectToMinesweeperGame").css({"opacity": 0}); 
  jQuery("div.notAvailable").css({"opacity": 0}); 
  jQuery("div.Box").eq(4).css({"opacity": 0}); 
  jQuery("div.Box").eq(3).css({"opacity": 0});
  jQuery("div.Box").eq(2).css({"opacity": 0}); 
  jQuery("div.Box").eq(0).css({"opacity": 0}); 
  function DISAPPEARLOR(){
    jQuery("div#informationLanding").css({"display": "none"}); 
    jQuery("div#informationSingleplayer").css({"display": "none"}); 
    jQuery("div#informationPowerUps").css({"display": "none"});
    jQuery("div#informationDailyRewards").css({"display": "none"}); 
  }
  setTimeout(DISAPPEARLOR, 1050)
  function DISPLAYLAHHH(){
    jQuery("div#informationMultiplayer").css({"display": "flex"});
    jQuery("div.Box").eq(1).css({"opacity": 0});  
  } 
  setTimeout(DISPLAYLAHHH, 1075);
  function APPEARLAHHH(){
    jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 1)"});
    jQuery("div.Box").eq(1).css({"opacity": 1});  
  }
  setTimeout(APPEARLAHHH, 1100);
}); 

jQuery("div#singleplayer").on("click", function(){
  jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
  jQuery(this).css({"background-color": "orange", "color": "black"});
  jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
  jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
  jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
  //LOL
  jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
  jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div.Box").eq(4).css({"opacity": 0}); 
  jQuery("div.Box").eq(3).css({"opacity": 0});
  jQuery("div.Box").eq(1).css({"opacity": 0}); 
  jQuery("div.Box").eq(0).css({"opacity": 0}); 
  function DISAPPEARLOR(){
    jQuery("div#informationMultiplayer").css({"display": "none"}); 
    jQuery("div#informationPowerUps").css({"display": "none"});
    jQuery("div#informationDailyRewards").css({"display": "none"}); 
    jQuery("div#informationLanding").css({"display": "none"}); 
  }
  setTimeout(DISAPPEARLOR, 1050)
  function DISPLAYLAHHH(){
    jQuery("div#informationSingleplayer").css({"display": "flex"}); 
    jQuery("div.Box").eq(2).css({"opacity": 0});
  } 
  setTimeout(DISPLAYLAHHH, 1075);
  function APPEARLAHHH(){
    jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 1)"}); 
    jQuery("div.Box").css({"opacity": 1}); 
    jQuery("div#RedirectToSudokuGame").css({"opacity": 1}); 
    jQuery("div#RedirectToMinesweeperGame").css({"opacity": 1}); 
    jQuery("div.notAvailable").eq(1).css({"opacity": 1}); 
  }
  setTimeout(APPEARLAHHH, 1100);
}); 

jQuery("div#dailyRewards").on("click", function(){
  jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
  jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
  jQuery(this).css({"background-color": "orange", "color": "black"});
  jQuery("div#buyPowerUps").css({"background-color": "blue", "color": "white"});
  jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
  //LOL
  jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 0)"});
  jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#RedirectToSudokuGame").css({"opacity": 0}); 
  jQuery("div#RedirectToMinesweeperGame").css({"opacity": 0}); 
  jQuery("div.notAvailable").css({"opacity": 0}); 
  jQuery("div.Box").eq(4).css({"opacity": 0}); 
  jQuery("div.Box").eq(2).css({"opacity": 0});
  jQuery("div.Box").eq(1).css({"opacity": 0}); 
  jQuery("div.Box").eq(0).css({"opacity": 0}); 
  function DISAPPEARLOR(){
    jQuery("div#informationMultiplayer").css({"display": "none"}); 
    jQuery("div#informationPowerUps").css({"display": "none"});
    jQuery("div#informationSingleplayer").css({"display": "none"}); 
    jQuery("div#informationLanding").css({"display": "none"})
  }
  setTimeout(DISAPPEARLOR, 1050)
  function DISPLAYLAHHH(){
    jQuery("div#informationDailyRewards").css({"display": "flex"}); 
    jQuery("div.Box").eq(3).css({"opacity": 0});
  } 
  setTimeout(DISPLAYLAHHH, 1075);
  function APPEARLAHHH(){
    jQuery("div.Box").eq(3).css({"opacity": 1}); 
    jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 1)"}); 
  }
  setTimeout(APPEARLAHHH, 1100);
}); 

//eq 3
jQuery("div#buyPowerUps").on("click", function(){
  jQuery("div#multiplayer").css({"background-color": "blue", "color": "white"});
  jQuery("div#singleplayer").css({"background-color": "blue", "color": "white"});
  jQuery("div#dailyRewards").css({"background-color": "blue", "color": "white"});
  jQuery(this).css({"background-color": "orange", "color": "black"});
  jQuery("div#introduction").css({"background-color": "blue", "color": "white"}); 
  //LOL
  jQuery("div#informationMultiplayer").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationSingleplayer").css({"background-color": "rgb(255, 165, 0, 0)"});
  jQuery("div#informationDailyRewards").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#informationLanding").css({"background-color": "rgb(255, 165, 0, 0)"}); 
  jQuery("div#RedirectToSudokuGame").css({"opacity": 0}); 
  jQuery("div#RedirectToMinesweeperGame").css({"opacity": 0}); 
  jQuery("div.notAvailable").css({"opacity": 0}); 
  jQuery("div.Box").eq(3).css({"opacity": 0}); 
  jQuery("div.Box").eq(2).css({"opacity": 0});
  jQuery("div.Box").eq(1).css({"opacity": 0}); 
  jQuery("div.Box").eq(0).css({"opacity": 0}); 
  function DISAPPEARLOR(){
    jQuery("div#informationMultiplayer").css({"display": "none"}); 
    jQuery("div#informationSingleplayer").css({"display": "none"});
    jQuery("div#informationDailyRewards").css({"display": "none"}); 
    jQuery("div#informationLanding").css({"display": "none"}); 
  }
  setTimeout(DISAPPEARLOR, 1050)
  function DISPLAYLAHHH(){
    jQuery("div#informationPowerUps").css({"display": "flex"}); 
    jQuery("div.Box").eq(4).css({"opacity": 0});
  } 
  setTimeout(DISPLAYLAHHH, 1075);
  function APPEARLAHHH(){
    jQuery("div#informationPowerUps").css({"background-color": "rgb(255, 165, 0, 1)"}); 
    jQuery("div.Box").eq(4).css({"opacity": 1});
  }
  setTimeout(APPEARLAHHH, 1100);
}); 

jQuery("div#RedirectToMinesweeperGame").on("mouseover", function(){
  jQuery("div#TranslucentBlackColorBaseMinesweeper").css({"display": "flex"}); 
  jQuery("div#internalMinesweeper").css({"display": "flex"});   
}); 

jQuery("div#RedirectToMinesweeperGame").on("mouseleave", function(){
  jQuery("div#TranslucentBlackColorBaseMinesweeper").css({"display": "none"}); 
  jQuery("div#internalMinesweeper").css({"display": "none"});  
}); 

jQuery("div#RedirectToSudokuGame").on("mouseover", function(){
  jQuery("div#TranslucentBlackColorBaseSudoku").css({"display": "flex"}); 
  jQuery("div#internalSudoku").css({"display": "flex"});   
}); 

jQuery("div#RedirectToSudokuGame").on("mouseleave", function(){
  jQuery("div#TranslucentBlackColorBaseSudoku").css({"display": "none"}); 
  jQuery("div#internalSudoku").css({"display": "none"});  
}); 

//button that opens up the redirect pop-up box to the sudoku game. 
jQuery("button.redirectButton").eq(0).on("click", function(){
  jQuery("body").css({"overflow-y": "hidden"});
  jQuery("div.gameInfoPopUpBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
  jQuery("div.Back").css({"opacity": 0});
  function ToFlex(){
    jQuery("div.gameInfoPopUpBase").eq(0).css({"display": "flex"});
    jQuery("div.Back").css({"display": "flex"});
  }
  setTimeout(ToFlex, 50); 
  function Display(){
    jQuery("div.Back").css({"opacity": 1});  
    jQuery("div.gameInfoPopUpBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
  }
  setTimeout(Display, 1000); 
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButton").eq(0).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.gameInfoPopUpBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.gameInfoPopUpBase").eq(0).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//to the minesweeper game. 
jQuery("button.redirectButton").eq(1).on("click", function(){
  jQuery("body").css({"overflow-y": "hidden"});
  jQuery("div.gameInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0 ,0)"});
  jQuery("div.Back").css({"opacity": 0});
  function ToFlex(){
    jQuery("div.gameInfoPopUpBase").eq(1).css({"display": "flex"});
    jQuery("div.Back").css({"display": "flex"});
  }
  setTimeout(ToFlex, 50); 
  function Display(){
    jQuery("div.Back").css({"opacity": 1});  
    jQuery("div.gameInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
  }
  setTimeout(Display, 1000); 
}); 

jQuery("button.redirectButton").children().on("click", function(){
  jQuery("body").css({"overflow-y": "hidden"});
  jQuery("div.gameInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0 ,0)"});
  jQuery("div.Back").css({"opacity": 0});
  function ToFlex(){
    jQuery("div.gameInfoPopUpBase").eq(1).css({"display": "flex"}); 
    jQuery("div.Back").css({"display": "flex"});
  }
  setTimeout(ToFlex, 50); 
  function Display(){
    jQuery("div.Back").css({"opacity": 1});
    jQuery("div.gameInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0, 0.75"}); 
  }
  setTimeout(Display, 1000); 
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButton").eq(1).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.gameInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.gameInfoPopUpBase").eq(1).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

jQuery("i.color").eq(0).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div#TranslucentBlackColorBase").css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

jQuery("i.color").eq(1).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div#TranslucentBlackColorBase").css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//the user can only cast their upvotes or downvotes if they are logged in. 
//users can only spi the 
//wheel initial state set to paused instead of default running
var sendToAPI = {
  "async": true,
  "crossDomain": true,
  "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "61d254f5ccd0211b32089499",
    "cache-control": "no-cache"
  },
}

//86400000 resets every day at 00:00:00 
function CheckValidation(){
  //get the date when this program RUNS
  var apiTime; 
  var getID; 
  var currentDate = new Date(); 
  var date = new Date(currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + (currentDate.getDate() + 1)); 
  jQuery.ajax(sendToAPI).done(function(serverReply){
    for (let index = 0; index < serverReply.length; index++){
      //compare against the dateOfLastSpin property in the API
      var a = new Date(serverReply[index].dateOfLastSpin)
      a = a.getDate(); 
      if (a != null){
        //if not 1 day interval then getID is undefined... AM I RIGHT?????
        if (date.getDate() - a >= 1){
          getID = serverReply[index]._id; 
        }
      } 
    }

    if (getID != undefined){ 
      var jsondata = {"chanceToSpinWheel": true}
      var sendToAPINOWW = {
        "async": true,
        "crossDomain": true,
        "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${getID}`,
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
      //update the API. 
      jQuery.ajax(sendToAPINOWW).done(function(){
        console.log("ITS WORKINGGG");
      }); 
    } 
    else{
      console.log("Not there")
    }
  }); 
}
setInterval(CheckValidation, 10000); 

jQuery("div#wheel").css({"animation-play-state": "paused"});

var targetID; 
var hasTheUserSpunTheWheel; 
var existingPoints; 

jQuery("button#spinTheWheel").on("click", function(){
  jQuery("div#loadingVerify").css({"display": "flex"}); 
  jQuery("body").css({"overflow-y": "hidden"}); 
  jQuery.ajax(sendToAPI).done(function(responseFromServer){
    for (let responseFromServerIndex = 0; responseFromServerIndex < responseFromServer.length; responseFromServerIndex++){
      if (responseFromServer[responseFromServerIndex].username == something){
        targetID = responseFromServer[responseFromServerIndex]._id; 
        hasTheUserSpunTheWheel = responseFromServer[responseFromServerIndex].chanceToSpinWheel; 
        existingPoints = responseFromServer[responseFromServerIndex].pointsPossessed; 
      }
    }
    console.log(hasTheUserSpunTheWheel); 
    if (something == null){
      jQuery("div#loadingVerify").css({"display": "none"}); 
      jQuery("body").css({"overflow-y": "scroll"}); 
      //prompt the user to sign in to like. 
      jQuery("body").css({"overflow-y": "hidden"});
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
      jQuery("div.Back").css({"opacity": 0});
      function ToFlex(){
        jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
        jQuery("div.Back").css({"display": "flex"});
      }
      setTimeout(ToFlex, 50); 
      function Display(){
        jQuery("div.Back").css({"opacity": 1});  
        jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
      }
      setTimeout(Display, 1000); 
    }
    else{
      //display the error message. 
      if (hasTheUserSpunTheWheel == false) {
        jQuery("div#loadingVerify").css({"display": "none"}); 
        jQuery("body").css({"overflow-y": "scroll"}); 
        jQuery("div#spinWheelInformation1RollPerDay").css({"background-color": "rgb(0, 0, 0, 0)"}); 
        function Appear(){
          jQuery("div#spinWheelInformation1RollPerDay").css({"display": "flex"}); 
        }
        setTimeout(Appear, 500); 
        function NowAppear(){
          jQuery("div#spinWheelMessage").css({"height": "100%"}); 
        }
        setTimeout(NowAppear, 1000); 
        function Disappear(){
          jQuery("div#spinWheelInformation1RollPerDay").css({"display": "none"});
        }
        setTimeout(Disappear, 2000);
      }
      else { //if the value is true then roll. 
        jQuery("div#loginVerify").css({"display": "none"}); 
        jQuery("div#loading").css({"display": "none"}); 
        var number;
        do {
          number = (Math.random() * 15.5).toFixed(2); 
        } 
        while (number < 4.2); 
        //animation duration... 
        jQuery("div#wheel").css({"animation-play-state": "running"});
        function Pause(){
          var assignPoints; 
          //Once this duration is reached, pause the animation... 
          jQuery("div#wheel").css({"animation-play-state": "paused"}); 
          //if rotation of the wheel is between 0 and 90 AWARD 10 POINTS
          //if the rotation of the wheel is between 90 and 180 AWARD 20 POINTS 
          //if the rotation of the wheel is between 180 and 270 award 30 points
          //if the rotation of the wheel is between 270 and 360 award 40 points.
          function Appear(){
            jQuery("div.spinningWheelBackground").css({"display": "flex"}); 
          }
          var elem = document.getElementById("wheel");
          var gcs = window.getComputedStyle(elem, null); 
          var tr = gcs.getPropertyValue("transform");
          var returnValue = tr.split('(')[1].split(')')[0].split(',');
          var angle = Math.round(Math.asin(returnValue[1]) * (180/Math.PI));
          //we don't want to have negative angles LOL
          if (angle < 0){
            angle = angle + 360; 
          }
          //assign points according to where the pointer is pointing to on the wheel. 
          //reset the wheel after every single turn... 
          //show the congratulations message.
          if (0 <= angle && angle <= 90){
            assignPoints = 30; 
            setTimeout(Appear, 3000);
            jQuery("i.close").on("click", function(){
              jQuery("div.spinningWheelBackground").css({"display": "none"}); 
            }); 
            jQuery("span#spinResult").html(assignPoints); 
            //add points to ajax 
            //add 30 POINTSSSSS

            var currentDate = new Date(); 
            var dateNow = new Date((currentDate.getMonth() + 1) + "/" + (currentDate.getDate() + 1) + "/" + currentDate.getFullYear()); 
            var timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(); 

            var jsondata = {"pointsPossessed": existingPoints + 30, "chanceToSpinWheel": false, "dateOfLastSpin": dateNow, "timeOfLastSpin": timeNow}; 

            var toPlayer = {
              "async": true,
              "crossDomain": true,
              "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${targetID}`,
              "method": "PUT",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              },
              "processData": false,
              "data": JSON.stringify(jsondata)
            }

            jQuery.ajax(toPlayer).done(function(){
              setTimeout(Appear, 1000);  
              jQuery("i.close").on("click", function(){
                jQuery("div.spinningWheelBackground").css({"display": "none"}); 
              });
              jQuery("span#spinResult").html(assignPoints);
            }); 
          }
          else if (270 < angle && angle < 360){
            assignPoints = 10;   
            //add points via ajax
            //add 10 POINTS 
            var currentDate = new Date(); 
            var dateNow = new Date((currentDate.getMonth() + 1) + "/" + (currentDate.getDate() + 1) + "/" + currentDate.getFullYear()); 
            var timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(); 

            var jsondata = {"pointsPossessed": existingPoints + 10, "chanceToSpinWheel": false, "dateOfLastSpin": dateNow, "timeOfLastSpin": timeNow}; 

            var toPlayer = {
              "async": true,
              "crossDomain": true,
              "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${targetID}`,
              "method": "PUT",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              },
              "processData": false,
              "data": JSON.stringify(jsondata)
            }
            
            jQuery.ajax(toPlayer).done(function(){
              setTimeout(Appear, 1000);  
              jQuery("i.close").on("click", function(){
                jQuery("div.spinningWheelBackground").css({"display": "none"}); 
              });
              jQuery("span#spinResult").html(assignPoints);
            }); 
          }
        }
        setTimeout(Pause, (number * 1000)); //convert to milliseconds 
      } 
    }
  });
}); 

//disable all the 'Buy This Item' button until the ajax returned the amount that the user has. LOL
for (let buttonIndex = 0; buttonIndex < jQuery("button.getItemButton").length; buttonIndex++){
  jQuery("button.getItemButton").eq(buttonIndex).prop({"disabled": true}); 
  jQuery("button.getItemButton").css({"opacity": 0.6}); 
}

var someSettingsThatINeed = {
  "async": true,
  "crossDomain": true,
  "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "61d254f5ccd0211b32089499",
    "cache-control": "no-cache"
  }
}

function Repeat () { 
  jQuery.ajax(someSettingsThatINeed).done(function(giveMe){
    var points; 
    for (let i = 0; i < giveMe.length; i++){
      if(giveMe[i].username == something){
        points = giveMe[i].pointsPossessed; 
      }
    }
    jQuery("span.currentPointsThatTheUserHas").eq(0).html(points);
    jQuery("span.currentPointsThatTheUserHas").eq(1).html(points);
    jQuery("span.currentPointsThatTheUserHas").eq(2).html(points);
    jQuery("span.currentPointsThatTheUserHas").eq(3).html(points);
    jQuery("span.currentPointsThatTheUserHas").eq(4).html(points);
    jQuery("span.currentPointsThatTheUserHas").eq(5).html(points);
    //re-enable all the buttons once again. 
    for (let buttonIndex = 0; buttonIndex < jQuery("button.getItemButton").length; buttonIndex++){
      jQuery("button.getItemButton").eq(buttonIndex).prop({"disabled": false}); 
      jQuery("button.getItemButton").css({"opacity": 1}); 
    }
  }); 
} 
setInterval(Repeat, 10000);

//if the player wishes to purchase an item from the shop
//confirm purchase.. 
var pointsNeededToBeDeducted; 
//add 5 to the api (Minesweeper part.)
jQuery("button.getItemButton").eq(0).on("click", function(){
  pointsNeededToBeDeducted = 195; 
  //directly take the amount from the span and do a comparison. If the amount in the span element is less than the points that needs to be deducted from the user account, then throw an error message to the user. 
  if (jQuery("span.currentPointsThatTheUserHas").eq(0).html() < pointsNeededToBeDeducted){
    jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(0).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(0).css({"display": "flex"});
      jQuery("div.custom").eq(0).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(0).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else { //prompt the user if he or she wants to have the points deducted LOL.
    jQuery("div.buyItemMessageBase").eq(1).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(1).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(1).css({"display": "flex"});
      jQuery("div.custom").eq(1).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(1).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(1).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    jQuery("button#confirm5HintsPurchase").on("click", function(){
      jQuery("div.custom").html('<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jxdtgpuk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Processing Request...'); 
      //perform ajax and get the existing amount from the api... 

      var deductPoints = {
        "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(deductPoints).done(function(give){
        var requiredID; 
        var existingMinesweeperHints; 
        for(let index = 0; index < give.length; index++){
          if (give[index].username == something){
            requiredID = give[index]._id;
            existingMinesweeperHints = give[index].noOfHintsMinesweeper; 
          }
        }

        var jsondata = {"pointsPossessed": jQuery("span.currentPointsThatTheUserHas").eq(0).html() - pointsNeededToBeDeducted, "noOfHintsMinesweeper": existingMinesweeperHints + 5}; 
        
        var amend = {
          "async": true,
          "crossDomain": true,
          "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${requiredID}`,
          "method": "PUT",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata)
        }

        jQuery.ajax(amend).done(function(){
          //add 5 via api.... 
          jQuery("div.custom").html('<h2>SUCCESSFUL</h2><br><br><lottie-player src="https://assets5.lottiefiles.com/packages/lf20_3juvcrdk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>')
          function RELOAD(){
            window.location.reload(); 
          }
          setTimeout(RELOAD, 2500);
        }); 
      }); 
    }); 
    jQuery("button#cancel5HintsPurchase").on("click", function(){
      jQuery("div.custom").css({"opacity": 0});
      jQuery("div.buyItemMessageBase").eq(1).css({"background-color": "rgb(0, 0, 0, 0)"});
      function Close(){
        jQuery("div.buyItemMessageBase").eq(1).css({"display": "none"}); 
      }
      setTimeout(Close, 1050);
    }); 
  }
}); 

jQuery("button.getItemButton").eq(1).on("click", function(){
  pointsNeededToBeDeducted = 290; 
  if (jQuery("span.currentPointsThatTheUserHas").eq(1).html() < pointsNeededToBeDeducted){
    jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(0).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(0).css({"display": "flex"});
      jQuery("div.custom").eq(0).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(0).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else {
  jQuery("div.buyItemMessageBase").eq(2).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(2).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(2).css({"display": "flex"});
      jQuery("div.custom").eq(2).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(2).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(2).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    jQuery("button#confirm10HintsPurchase").on("click", function(){
      jQuery("div.custom").html('<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jxdtgpuk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Processing Request...'); 
      //perform ajax and deduct; 
    
      var deductPoints = {
        "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(deductPoints).done(function(give){
        var requiredID; 
        var existingMinesweeperHints; 
        for(let index = 0; index < give.length; index++){
          if (give[index].username == something){
            requiredID = give[index]._id
            existingMinesweeperHints = give[index].noOfHintsMinesweeper; 
          }
        }

        var jsondata = {"pointsPossessed": jQuery("span.currentPointsThatTheUserHas").eq(1).html() - pointsNeededToBeDeducted, "noOfHintsMinesweeper": existingMinesweeperHints + 10}; 
        
        var amend = {
          "async": true,
          "crossDomain": true,
          "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${requiredID}`,
          "method": "PUT",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata)
        }

        jQuery.ajax(amend).done(function(){
          jQuery("div.custom").html('<h2>SUCCESSFUL</h2><br><br><lottie-player src="https://assets5.lottiefiles.com/packages/lf20_3juvcrdk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>')
          function RELOAD(){
            window.location.reload(); 
          }
          setTimeout(RELOAD, 2500);
        }); 
      }); 
    }); 
    jQuery("button#cancel10HintsPurchase").on("click", function(){
      jQuery("div.custom").css({"opacity": 0});
      jQuery("div.buyItemMessageBase").eq(2).css({"background-color": "rgb(0, 0, 0, 0)"});
      function Close(){
        jQuery("div.buyItemMessageBase").eq(2).css({"display": "none"}); 
      }
      setTimeout(Close, 1050);
    }); 
  }
}); 

jQuery("button.getItemButton").eq(2).on("click", function(){
  pointsNeededToBeDeducted = 570; 
  if (jQuery("span.currentPointsThatTheUserHas").eq(2).html() < pointsNeededToBeDeducted){
    jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(0).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(0).css({"display": "flex"});
      jQuery("div.custom").eq(0).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(0).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else {
  jQuery("div.buyItemMessageBase").eq(3).css({"background-color": "rgb(0, 0, 0 ,0)"});
      jQuery("div.custom").eq(3).css({"opacity": 0});
      function ToFlex(){
        jQuery("div.buyItemMessageBase").eq(3).css({"display": "flex"});
        jQuery("div.custom").eq(3).css({"display": "flex"});
      }
      setTimeout(ToFlex, 50); 
      function Display(){
        jQuery("div.custom").eq(3).css({"opacity": 1});  
        jQuery("div.buyItemMessageBase").eq(3).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
      }
      setTimeout(Display, 1000); 
      jQuery("button#confirm20HintsPurchase").on("click", function(){
        jQuery("div.custom").html('<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jxdtgpuk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Processing Request...'); 
        //perform ajax and deduct; 
      
        var deductPoints = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }

        jQuery.ajax(deductPoints).done(function(give){
          var requiredID; 
          var existingMinesweeperHints; 
          for(let index = 0; index < give.length; index++){
            if (give[index].username == something){
              requiredID = give[index]._id;
              existingMinesweeperHints = give[index].noOfHintsMinesweeper; 
            }
          }

          var jsondata = {"pointsPossessed": jQuery("span.currentPointsThatTheUserHas").eq(2).html() - pointsNeededToBeDeducted, "noOfHintsMinesweeper": existingMinesweeperHints + 20}; 
          
          var amend = {
            "async": true,
            "crossDomain": true,
            "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${requiredID}`,
            "method": "PUT",
            "headers": {
              "content-type": "application/json",
              "x-apikey": "61d254f5ccd0211b32089499",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
          }

          jQuery.ajax(amend).done(function(){
            jQuery("div.custom").html('<h2>SUCCESSFUL</h2><br><br><lottie-player src="https://assets5.lottiefiles.com/packages/lf20_3juvcrdk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>')
            function RELOAD(){
              window.location.reload(); 
            }
            setTimeout(RELOAD, 2500);
          }); 
        }); 
      }); 
      jQuery("button#cancel20HintsPurchase").on("click", function(){
        jQuery("div.custom").css({"opacity": 0});
        jQuery("div.buyItemMessageBase").eq(3).css({"background-color": "rgb(0, 0, 0, 0)"});
        function Close(){
          jQuery("div.buyItemMessageBase").eq(3).css({"display": "none"}); 
        }
        setTimeout(Close, 1050);
      }); 
  }
}); 

jQuery("button.getItemButton").eq(3).on("click", function(){
  pointsNeededToBeDeducted = 165; 
  if (jQuery("span.currentPointsThatTheUserHas").eq(3).html() < pointsNeededToBeDeducted){
    jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(0).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(0).css({"display": "flex"});
      jQuery("div.custom").eq(0).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(0).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000);
  }
  else {
    jQuery("div.buyItemMessageBase").eq(4).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(4).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(4).css({"display": "flex"});
      jQuery("div.custom").eq(4).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(4).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(4).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    jQuery("button#confirm5HintsPurchaseSudoku").on("click", function(){
      jQuery("div.custom").html('<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jxdtgpuk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Processing Request...'); 
      //perform ajax and deduct; 
    
      var deductPoints = {
        "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(deductPoints).done(function(give){
        var requiredID; 
        var existingSudokuHints; 
        for(let index = 0; index < give.length; index++){
          if (give[index].username == something){
            requiredID = give[index]._id;
            existingSudokuHints = give[index].noOfHintsSudoku; 
          }
        }

        var jsondata = {"pointsPossessed": jQuery("span.currentPointsThatTheUserHas").eq(3).html() - pointsNeededToBeDeducted, "noOfHintsSudoku": existingSudokuHints + 5}; 
        
        var amend = {
          "async": true,
          "crossDomain": true,
          "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${requiredID}`,
          "method": "PUT",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata)
        }

        jQuery.ajax(amend).done(function(){
          jQuery("div.custom").html('<h2>SUCCESSFUL</h2><br><br><lottie-player src="https://assets5.lottiefiles.com/packages/lf20_3juvcrdk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>')
          function RELOAD(){
            window.location.reload(); 
          }
          setTimeout(RELOAD, 2500);
        }); 
      }); 
    }); 
    jQuery("button#cancel5HintsPurchaseSudoku").on("click", function(){
      jQuery("div.custom").css({"opacity": 0});
      jQuery("div.buyItemMessageBase").eq(4).css({"background-color": "rgb(0, 0, 0, 0)"});
      function Close(){
        jQuery("div.buyItemMessageBase").eq(4).css({"display": "none"}); 
      }
      setTimeout(Close, 1050);
    }); 
  }
}); 

jQuery("button.getItemButton").eq(4).on("click", function(){
  pointsNeededToBeDeducted = 260;
  if (jQuery("span.currentPointsThatTheUserHas").eq(4).html() < pointsNeededToBeDeducted){
    jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(0).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(0).css({"display": "flex"});
      jQuery("div.custom").eq(0).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(0).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000);
  }
  else {
    jQuery("div.buyItemMessageBase").eq(5).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(5).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(5).css({"display": "flex"});
      jQuery("div.custom").eq(5).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(5).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(5).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    jQuery("button#confirm10HintsPurchaseSudoku").on("click", function(){
      jQuery("div.custom").html('<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jxdtgpuk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Processing Request...'); 
      //perform ajax and deduct; 
    
      var deductPoints = {
        "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(deductPoints).done(function(give){
        var requiredID; 
        var existingSudokuHints; 
        for(let index = 0; index < give.length; index++){
          if (give[index].username == something){
            requiredID = give[index]._id;
            existingSudokuHints = give[index].noOfHintsSudoku; 
          }
        }

        var jsondata = {"pointsPossessed": jQuery("span.currentPointsThatTheUserHas").eq(3).html() - pointsNeededToBeDeducted, "noOfHintsSudoku": existingSudokuHints + 10}; 
        
        var amend = {
          "async": true,
          "crossDomain": true,
          "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${requiredID}`,
          "method": "PUT",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata)
        }

        jQuery.ajax(amend).done(function(){
          jQuery("div.custom").html('<h2>SUCCESSFUL</h2><br><br><lottie-player src="https://assets5.lottiefiles.com/packages/lf20_3juvcrdk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>')
          function RELOAD(){
            window.location.reload(); 
          }
          setTimeout(RELOAD, 2500);
        }); 
      }); 
    }); 
    jQuery("button#cancel10HintsPurchaseSudoku").on("click", function(){
      jQuery("div.custom").css({"opacity": 0});
      jQuery("div.buyItemMessageBase").eq(5).css({"background-color": "rgb(0, 0, 0, 0)"});
      function Close(){
        jQuery("div.buyItemMessageBase").eq(5).css({"display": "none"}); 
      }
      setTimeout(Close, 1050);
    }); 
  }
}); 

jQuery("button.getItemButton").eq(5).on("click", function(){
  pointsNeededToBeDeducted = 540;
  if (jQuery("span.currentPointsThatTheUserHas").eq(5).html() < pointsNeededToBeDeducted){
    jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(0).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(0).css({"display": "flex"});
      jQuery("div.custom").eq(0).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(0).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000);
  }
  else {
    jQuery("div.buyItemMessageBase").eq(6).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.custom").eq(6).css({"opacity": 0});
    function ToFlex(){
      jQuery("div.buyItemMessageBase").eq(6).css({"display": "flex"});
      jQuery("div.custom").eq(6).css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.custom").eq(6).css({"opacity": 1});  
      jQuery("div.buyItemMessageBase").eq(6).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    jQuery("button#confirm20HintsPurchaseSudoku").on("click", function(){
      jQuery("div.custom").html('<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_jxdtgpuk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Processing Request...'); 
      //perform ajax and deduct; 
    
      var deductPoints = {
        "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(deductPoints).done(function(give){
        var requiredID; 
        var existingSudokuHints; 
        for(let index = 0; index < give.length; index++){
          if (give[index].username == something){
            requiredID = give[index]._id;
            existingSudokuHints = give[index].noOfHintsSudoku; 
          }
        }

        var jsondata = {"pointsPossessed": jQuery("span.currentPointsThatTheUserHas").eq(3).html() - pointsNeededToBeDeducted, "noOfHintsSudoku": existingSudokuHints + 20}; 
        
        var amend = {
          "async": true,
          "crossDomain": true,
          "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${requiredID}`,
          "method": "PUT",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata)
        }

        jQuery.ajax(amend).done(function(){
          jQuery("div.custom").html('<h2>SUCCESSFUL</h2><br><br><lottie-player src="https://assets5.lottiefiles.com/packages/lf20_3juvcrdk.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay></lottie-player>')
          function RELOAD(){
            window.location.reload(); 
          }
          setTimeout(RELOAD, 2500);
        }); 
      }); 
    }); 
    jQuery("button#cancel20HintsPurchaseSudoku").on("click", function(){
      jQuery("div.custom").css({"opacity": 0});
      jQuery("div.buyItemMessageBase").eq(6).css({"background-color": "rgb(0, 0, 0, 0)"});
      function Close(){
        jQuery("div.buyItemMessageBase").eq(6).css({"display": "none"}); 
      }
      setTimeout(Close, 1050);
    }); 
  }
});

jQuery("button#closeMessage").on("click", function(){
    jQuery("div.custom").css({"opacity": 0});
    jQuery("div.buyItemMessageBase").css({"background-color": "rgb(0, 0, 0, 0)"});
    function Close(){
      jQuery("div.buyItemMessageBase").css({"display": "none"}); 
    }
    setTimeout(Close, 1050);
}); 

//minesweeper 5 hints 
jQuery("button.purchaseItem").eq(0).on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else {
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div.purchaseItemInfoPopUpBase").eq(0).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div.purchaseItemInfoPopUpBase").eq(0).css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div.purchaseItemInfoPopUpBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  } 
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButtonPurchaseItems").eq(0).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.purchaseItemInfoPopUpBase").eq(0).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.purchaseItemInfoPopUpBase").eq(0).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//minesweeper 10 hints
jQuery("button.purchaseItem").eq(1).on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else{
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div.purchaseItemInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div.purchaseItemInfoPopUpBase").eq(1).css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div.purchaseItemInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  } 
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButtonPurchaseItems").eq(1).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.purchaseItemInfoPopUpBase").eq(1).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.purchaseItemInfoPopUpBase").eq(1).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//minesweeper 20 hints 
jQuery("button.purchaseItem").eq(2).on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  } 
  else {
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div.purchaseItemInfoPopUpBase").eq(2).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div.purchaseItemInfoPopUpBase").eq(2).css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div.purchaseItemInfoPopUpBase").eq(2).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  } 
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButtonPurchaseItems").eq(2).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.purchaseItemInfoPopUpBase").eq(2).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.purchaseItemInfoPopUpBase").eq(2).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//sudoku 5 hints 
jQuery("button.purchaseItem").eq(3).on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else{ 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div.purchaseItemInfoPopUpBase").eq(3).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div.purchaseItemInfoPopUpBase").eq(3).css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div.purchaseItemInfoPopUpBase").eq(3).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  } 
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButtonPurchaseItems").eq(3).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.purchaseItemInfoPopUpBase").eq(3).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.purchaseItemInfoPopUpBase").eq(3).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//sudoku 10 hints 
jQuery("button.purchaseItem").eq(4).on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else{
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div.purchaseItemInfoPopUpBase").eq(4).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div.purchaseItemInfoPopUpBase").eq(4).css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div.purchaseItemInfoPopUpBase").eq(4).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  } 
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButtonPurchaseItems").eq(4).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.purchaseItemInfoPopUpBase").eq(4).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.purchaseItemInfoPopUpBase").eq(4).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//sudoku 20 hints 
jQuery("button.purchaseItem").eq(5).on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else{
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div.purchaseItemInfoPopUpBase").eq(5).css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div.purchaseItemInfoPopUpBase").eq(5).css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div.purchaseItemInfoPopUpBase").eq(5).css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
}); 

//to close the popup menu for sudoku.
jQuery("i.popUpCloseButtonPurchaseItems").eq(5).on("click", function(){
  jQuery("div.Back").css({"opacity": 0});
  jQuery("div.purchaseItemInfoPopUpBase").eq(5).css({"background-color": "rgb(0, 0, 0, 0)"});
  function Close(){
    jQuery("div.purchaseItemInfoPopUpBase").eq(5).css({"display": "none"}); 
  }
  setTimeout(Close, 1050);
  jQuery("body").css({"overflow-y": "scroll"});
}); 

//manage like and dislikes....
jQuery("i#thumbsDownSudoku").on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else{ //give a dislike for the sudoku game...
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div#loading").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#LoadingBase").css({"display": "flex"});
      jQuery("div#loading").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div#loading").css({"opacity": 1});  
      jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000);  
    var existingLikesSudoku;
    var exsitingDislikesSudoku;

    var getFromAPI = {
      "async": true,
      "crossDomain": true,
      "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      }
    }

    jQuery.ajax(getFromAPI).done(function(returned){
      //run ajax get to get the existing values under 
      for (let pos = 0; pos < returned.length; pos++){
        if (returned[pos].gameType == "Sudoku"){
          existingLikesSudoku = returned[pos].Likes;
          existingDislikesSudoku = returned[pos].Dislikes; 
        }
      } 
      var minesweeperLikes; 
      var minesweeperDislikes;
      var sudokuLikes;
      var sudokuDislikes; 

      var getIt = {
      "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(getIt).done(function(retrievedInformation){
        var entity = localStorage.getItem("username"); 
        var flag; 
        for (let iA = 0; iA < retrievedInformation.length; iA++){
          if (retrievedInformation[iA].username = entity){
            minesweeperLikes = retrievedInformation[iA].gamesLiked[0].Liked; 
            minesweeperDislikes = retrievedInformation[iA].gamesLiked[0].Disliked;
            sudokuLikes = retrievedInformation[iA].gamesLiked[1].Liked;
            sudokuDislikes = retrievedInformation[iA].gamesLiked[1].Disliked; 
          }
        }

        var getFromLoginInformationAPI = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }

        //give like to the sudoku game... 
        jQuery.ajax(getFromLoginInformationAPI).done(function(responseFromAPI){
          var thatID; 
          for (let firstIndex = 0; firstIndex < responseFromAPI.length; firstIndex++){
            if (responseFromAPI[firstIndex].username == entity){
              thatID = responseFromAPI[firstIndex]._id; 
            }
          }
          if (jQuery("i#thumbsDownSudoku").css("color") == "rgb(255, 0, 0)"){ //if the person has already liked the post. 
            backupSudokuDislike = false; 
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfDislikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Sudoku"){
                  noOfDislikes = response1[i].Dislikes - 1; //the person would want to unlike the post. 
                  jQuery("i#thumbsDownSudoku").css({"color": "black"}); 
                }
              }
              var jsondata = {"gameType": "Sudoku", "Likes": existingLikesSudoku, "Dislikes": noOfDislikes};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/620a6d026aa50d6b005784c1",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) { 
                jQuery("span#DislikeSudoku").html(noOfDislikes); 
                //update the true and false 

                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper", "Disliked": minesweeperDislikes, "Liked": minesweeperLikes},
                    {"gameName":"Sudoku","Disliked": false, "Liked": sudokuLikes}
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Removed one like"); 
                  jQuery("i#thumbsDownSudoku").prop({"disabled": false}); 
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});
                }); 
              });
            }); 
          }
          else {
            backupSudokuDislike = true; 
            //if the person has not liked the post... 
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfDislikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Sudoku"){
                  jQuery("i#thumbsDownSudoku").css({"color": "red"}); 
                  noOfDislikes = response1[i].Dislikes + 1; //the person would want to unlike the post. 
                }
              }
              var jsondata = {"gameType": "Sudoku","Likes": existingLikesSudoku, "Dislikes": noOfDislikes};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/620a6d026aa50d6b005784c1",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) {
                jQuery("span#DislikeSudoku").html(noOfDislikes); 
                
                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper", "Disliked": minesweeperDislikes, "Liked": minesweeperLikes},
                    {"gameName":"Sudoku","Disliked": true, "Liked": sudokuLikes}
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Added one like"); 
                  jQuery("i#thumbsDownSudoku").prop({"disabled": false}); 
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});
                }); 
              });
            });
          }
        }); 
      }); 
    }); 
  }
}); 

//give a like to this game... 
jQuery("i#thumbsUpSudoku").on("click", function(){
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
  }
  else{
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div#loading").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#LoadingBase").css({"display": "flex"});
      jQuery("div#loading").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div#loading").css({"opacity": 1});  
      jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    var existingLikesSudoku;
    var exsitingDislikesSudoku;

    var getFromAPI = {
      "async": true,
      "crossDomain": true,
      "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      }
    }

    jQuery.ajax(getFromAPI).done(function(returned){
      //run ajax get to get the existing values under 
      for (let pos = 0; pos < returned.length; pos++){
        if (returned[pos].gameType == "Sudoku"){
          existingLikesSudoku = returned[pos].Likes;
          existingDislikesSudoku = returned[pos].Dislikes; 
        }
      } 
      var minesweeperLikes; 
      var minesweeperDislikes;
      var sudokuLikes;
      var sudokuDislikes; 

      var getIt = {
      "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(getIt).done(function(retrievedInformation){
        var entity = localStorage.getItem("username"); 
        var flag; 
        for (let iA = 0; iA < retrievedInformation.length; iA++){
          if (retrievedInformation[iA].username = entity){
            minesweeperLikes = retrievedInformation[iA].gamesLiked[0].Liked; 
            minesweeperDislikes = retrievedInformation[iA].gamesLiked[0].Disliked;
            sudokuLikes = retrievedInformation[iA].gamesLiked[1].Liked;
            sudokuDislikes = retrievedInformation[iA].gamesLiked[1].Disliked; 
          }
        }

        var getFromLoginInformationAPI = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }

        //give like to the sudoku game... 
        jQuery.ajax(getFromLoginInformationAPI).done(function(responseFromAPI){
          var thatID; 
          for (let firstIndex = 0; firstIndex < responseFromAPI.length; firstIndex++){
            if (responseFromAPI[firstIndex].username == entity){
              thatID = responseFromAPI[firstIndex]._id; 
            }
          }
          if (jQuery("i#thumbsUpSudoku").css("color") == "rgb(0, 128, 0)"){ //if the person has already liked the post. 
            backupSudokuLike = false; 
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            //give to the sudoku game only  amend the Likes property of the api  
            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfLikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Sudoku"){
                  noOfLikes = response1[i].Likes - 1; //the person would want to unlike the post. 
                  jQuery("i#thumbsUpSudoku").css({"color": "black"}); 
                }
              }
              var jsondata = {"gameType": "Sudoku", "Likes": noOfLikes, "Dislikes": exsitingDislikesSudoku};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/620a6d026aa50d6b005784c1",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) { 
                jQuery("span#LikeSudoku").html(noOfLikes); 
                //update the true and false 

                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper", "Disliked": minesweeperDislikes, "Liked": minesweeperLikes},
                    {"gameName":"Sudoku","Disliked": sudokuDislikes, "Liked": false}
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Removed one like"); 
                  jQuery("i#thumbsUpSudoku").prop({"disabled": false}); 
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});
                }); 
              });
            }); 
          }
          else {
            backupSudokuLike = true;
            //if the person has not liked the post... 
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfLikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Sudoku"){
                  jQuery("i#thumbsUpSudoku").css({"color": "green"}); 
                  noOfLikes = response1[i].Likes + 1; //the person would want to unlike the post. 
                }
              }
              var jsondata = {"gameType": "Sudoku","Likes": noOfLikes, "Dislikes": exsitingDislikesSudoku};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/620a6d026aa50d6b005784c1",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) {
                jQuery("span#LikeSudoku").html(noOfLikes); 
                
                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper", "Disliked": minesweeperDislikes, "Liked": minesweeperLikes},
                    {"gameName":"Sudoku","Disliked":sudokuDislikes,"Liked":true}
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Added one like"); 
                  jQuery("i#thumbsUpSudoku").prop({"disabled": false}); 
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});
                }); 
              });
            });
          }
        }); 
      }); 
    }); 
  }
}); 

jQuery("i#thumbsDownMinesweeper").on("click", function(){
  jQuery("i#thumbsDownMinesweeper").prop({"disabled": true}); 
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    jQuery("i#thumbsDownMinesweeper").prop({"disabled": false}); 
  }
  else{
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div#loading").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#LoadingBase").css({"display": "flex"});
      jQuery("div#loading").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div#loading").css({"opacity": 1});  
      jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    var existingLikesMinesweeper;
    var exsitingDislikesMinesweeper;

    var getFromAPI = {
      "async": true,
      "crossDomain": true,
      "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      }
    }

    jQuery.ajax(getFromAPI).done(function(returned){
      //run ajax get to get the existing values under 
      for (let pos = 0; pos < returned.length; pos++){
        if (returned[pos].gameType == "Minesweeper"){
          existingLikesSudoku = returned[pos].Likes;
          existingDislikesSudoku = returned[pos].Dislikes; 
        }
      } 
      var minesweeperLikes; 
      var minesweeperDislikes;
      var sudokuLikes;
      var sudokuDislikes; 

      var getIt = {
      "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(getIt).done(function(retrievedInformation){
        var entity = localStorage.getItem("username"); 
        var flag; 
        for (let iA = 0; iA < retrievedInformation.length; iA++){
          if (retrievedInformation[iA].username = entity){
            minesweeperLikes = retrievedInformation[iA].gamesLiked[0].Liked; 
            minesweeperDislikes = retrievedInformation[iA].gamesLiked[0].Disliked;
            sudokuLikes = retrievedInformation[iA].gamesLiked[1].Liked;
            sudokuDislikes = retrievedInformation[iA].gamesLiked[1].Disliked; 
          }
        }

        var getFromLoginInformationAPI = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }
        var entity = localStorage.getItem("username"); 
        var flag; 
        var getFromLoginInformationAPI = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }

        //thumbs up means give a dislike LOL 
        jQuery.ajax(getFromLoginInformationAPI).done(function(responseFromAPI){
          var thatID; 
          for (let firstIndex = 0; firstIndex < responseFromAPI.length; firstIndex++){
            if (responseFromAPI[firstIndex].username == entity){
              thatID = responseFromAPI[firstIndex]._id; 
            }
          }
          if (jQuery("i#thumbsDownMinesweeper").css("color") == "rgb(255, 0, 0)"){ //if the person has already liked the post. 
            backupMinesweeperDislike = false;
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfDislikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Minesweeper"){
                  noOfDislikes = response1[i].Dislikes - 1; //the person would want to unlike the post. 
                  jQuery("i#thumbsDownMinesweeper").css({"color": "black"}); 
                }
              }
              var jsondata = {"gameType": "Minesweeper", "Likes": existingLikesMinesweeper, "Dislikes": noOfDislikes};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/6208f8a26aa50d6b0055f74f",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) { 
                jQuery("span#DislikeMinesweeper").html(noOfDislikes); 
                //update the true and false 

                //remove the dislike 
                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper","Disliked": false, "Liked": minesweeperLikes},
                    {"gameName":"Sudoku", "Disliked": sudokuDislikes, "Liked": sudokuLikes},
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Removed one like"); 
                  jQuery("i#thumbsDownMinesweeper").prop({"disabled": false});
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});  
                }); 
              });
            }); 
          }
          else {
            backupMinesweeperDislike = false;
            //if the person has not liked the post... 
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfDislikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Minesweeper"){
                  jQuery("i#thumbsDownMinesweeper").css({"color": "red"}); 
                  noOfDislikes = response1[i].Dislikes + 1; //the person would want to unlike the post. 
                }
              }
              //give like 
              var jsondata = {"gameType": "Minesweeper","Likes": existingLikesMinesweeper, "Dislikes": noOfDislikes};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/6208f8a26aa50d6b0055f74f",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) {
                jQuery("span#DislikeMinesweeper").html(noOfDislikes); 
                
                //give a dislike 
                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper","Disliked": true,"Liked": minesweeperLikes},
                    {"gameName": "Sudoku", "Disliked": sudokuDislikes, "Liked": sudokuLikes}
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Added one like"); 
                  jQuery("i#thumbsDownMinesweeper").prop({"disabled": false}); 
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});
                }); 
              });
            });
          }
        }); 
      });
    }); 
  }
}); 

//thumbs up kinda works for the minesweeper.. 
jQuery("i#thumbsUpMinesweeper").on("click", function(){
  jQuery("i#thumbsUpMinesweeper").prop({"disabled": true}); 
  if (something == null){
    //prompt the user to sign in to like. 
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div.Back").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#TranslucentBlackColorBase").css({"display": "flex"});
      jQuery("div.Back").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div.Back").css({"opacity": 1});  
      jQuery("div#TranslucentBlackColorBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    jQuery("i#thumbsUpMinesweeper").prop({"disabled": false}); 
  }
  else{
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0 ,0)"});
    jQuery("div#loading").css({"opacity": 0});
    function ToFlex(){
      jQuery("div#LoadingBase").css({"display": "flex"});
      jQuery("div#loading").css({"display": "flex"});
    }
    setTimeout(ToFlex, 50); 
    function Display(){
      jQuery("div#loading").css({"opacity": 1});  
      jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
    }
    setTimeout(Display, 1000); 
    var existingLikesMinesweeper;
    var exsitingDislikesMinesweeper;

    var getFromAPI = {
      "async": true,
      "crossDomain": true,
      "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      }
    }

    jQuery.ajax(getFromAPI).done(function(returned){
      //run ajax get to get the existing values under 
      for (let pos = 0; pos < returned.length; pos++){
        if (returned[pos].gameType == "Minesweeper"){
          existingLikesSudoku = returned[pos].Likes;
          existingDislikesSudoku = returned[pos].Dislikes; 
        }
      } 
      var minesweeperLikes; 
      var minesweeperDislikes;
      var sudokuLikes;
      var sudokuDislikes; 

      var getIt = {
      "async": true,
        "crossDomain": true,
        "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61d254f5ccd0211b32089499",
          "cache-control": "no-cache"
        }
      }

      jQuery.ajax(getIt).done(function(retrievedInformation){
        var entity = localStorage.getItem("username"); 
        var flag; 
        for (let iA = 0; iA < retrievedInformation.length; iA++){
          if (retrievedInformation[iA].username = entity){
            minesweeperLikes = retrievedInformation[iA].gamesLiked[0].Liked; 
            minesweeperDislikes = retrievedInformation[iA].gamesLiked[0].Disliked;
            sudokuLikes = retrievedInformation[iA].gamesLiked[1].Liked;
            sudokuDislikes = retrievedInformation[iA].gamesLiked[1].Disliked; 
          }
        }
        var entity = localStorage.getItem("username"); 
        var flag; 
        var getFromLoginInformationAPI = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }
        var flag; 
        var getFromLoginInformationAPI = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }

        //thumbs up means give a like LOL //consider every single item in the 
        jQuery.ajax(getFromLoginInformationAPI).done(function(responseFromAPI){
          var entity = localStorage.getItem("username"); 
          var arr = []; 
          var thatID; 
          for (let firstIndex = 0; firstIndex < responseFromAPI.length; firstIndex++){
            if (responseFromAPI[firstIndex].username == entity){
              thatID = responseFromAPI[firstIndex]._id
            }
          }
          if (jQuery("i#thumbsUpMinesweeper").css("color") == "rgb(0, 128, 0)"){ //if the person has already liked the post. 
            backupMinesweeperLike = false; 
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfLikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Minesweeper"){
                  noOfLikes = response1[i].Likes - 1; //the person would want to unlike the post. 
                  jQuery("i#thumbsUpMinesweeper").css({"color": "black"}); 
                }
              }

              var jsondata = {"gameType": "Minesweeper","Likes": noOfLikes, "Dislikes": exsitingDislikesMinesweeper};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/6208f8a26aa50d6b0055f74f",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) { 
                jQuery("span#LikeMinesweeper").html(noOfLikes); 
                //update the true and false 

                //remove like 
                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper","Disliked":minesweeperDislikes,"Liked":false},
                    {"gameName":"Sudoku","Disliked": sudokuDislikes,"Liked": sudokuLikes},
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Removed one like"); 
                  jQuery("i#thumbsUpMinesweeper").prop({"disabled": false}); 
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});
                }); 
              });
            }); 
          }
          else {
            backupMinesweeperLike = true;  
            //if the person has not liked the post... 
            var getFromAPIAndCheck = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike",
              "method": "GET",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              }
            }

            jQuery.ajax(getFromAPIAndCheck).done(function(response1){
              var noOfLikes; 
              for (let i = 0; i < response1.length; i++){
                if(response1[i].gameType == "Minesweeper"){
                  jQuery("i#thumbsUpMinesweeper").css({"color": "green"}); 
                  noOfLikes = response1[i].Likes + 1; //the person would want to unlike the post. 
                }
              }
              var jsondata = {"gameType": "Minesweeper","Likes": noOfLikes, "Dislikes": exsitingDislikesMinesweeper};
              var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://newdatabase1-1d27.restdb.io/rest/minesweeperlikeordislike/6208f8a26aa50d6b0055f74f",
                "method": "PUT",
                "headers": {
                  "content-type": "application/json",
                  "x-apikey": "61d254f5ccd0211b32089499",
                  "cache-control": "no-cache"
                },
                "processData": false,
                "data": JSON.stringify(jsondata)
              }

              jQuery.ajax(settings).done(function (response) {
                jQuery("span#LikeMinesweeper").html(noOfLikes); 
                
                var dataToBeSent = {
                  "gamesLiked":
                  [
                    {"gameName":"Minesweeper","Disliked":minesweeperDislikes,"Liked": true},
                    {"gameName":"Sudoku","Disliked":sudokuDislikes,"Liked":sudokuLikes}
                  ]
                }

                var requiredSettings = {
                  "async": true,
                  "crossDomain": true,
                  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${thatID}`,
                  "method": "PUT",
                  "headers": {
                    "content-type": "application/json",
                    "x-apikey": "61d254f5ccd0211b32089499",
                    "cache-control": "no-cache"
                  },
                  "processData": false,
                  "data": JSON.stringify(dataToBeSent) 
                }

                jQuery.ajax(requiredSettings).done(function(){
                  console.log("Added one like"); 
                  jQuery("i#thumbsUpMinesweeper").prop({"disabled": false});
                  jQuery("div#loading").css({"opacity": 0});
                  jQuery("div#LoadingBase").css({"background-color": "rgb(0, 0, 0, 0)"});
                  function Close(){
                    jQuery("div#LoadingBase").css({"display": "none"}); 
                  }
                  setTimeout(Close, 1050);
                  jQuery("body").css({"overflow-y": "scroll"});
                }); 
              });
            });
          }
        }); 
      });
    }); 
  }
}); 

//for people who wants to create an account.... 
jQuery("button#CreateNewAccount").on("click", function(){
  jQuery("div.formCluster").eq(0).css({"opacity": 0}); 
  //we don't need the button anymore. 
  jQuery("div.loginCard").html("<i class = \"material-icons\" style = \"font-size: 50px; position: relative\" id = \"back\">arrow_back</i><br><br><h2>Welcome, new user, let's get you registered!</h2><div class = \"formCluster\" style = \"opacity: 0; transition: opacity 1s; display: flex; flex-direction: column\"><div class = \"loginField\"><label>Username: </label><input type = \"text\" placeholder = \"New Username\" id = \"username\"></div><div class = \"loginField\"><label>Password:</label><input type = \"text\" placeholder = \"New Password\" id = \"password\"></div><br><br><button type = \"submit\" id = \"registerButtonAccount\">Register</button></div>");
  //if the user misclicked on the button and would like to return to the previous page... 
  jQuery("i#back").on("click", function(){
    if (jQuery("input#username").val().length == 0 && jQuery("input#password").val().length == 0){
      jQuery("div.loginCard").html(null);
    }
    else {
      var confirmation = confirm("You have unsaved changes. If you choose to return to the login card, all your information will be lost. Are you sure you want to continue?"); 
      if (confirmation == true){ 

      }
    }
  }); 
  jQuery("button#registerButtonAccount").css({"border-style": "solid", "border-radius": "5px", "background-color": "green", "color": "white", "transition": "background-color 1s, color 1s"}); 
  //to store message
  jQuery("button#registerButtonAccount").after("<br><br><p id =\"Notice\"></p>"); 
  function MakeFormClusterAppear(){
    jQuery("div.formCluster").eq(0).css({"opacity": 1}); 
  }
  setTimeout(MakeFormClusterAppear, 1000);  
  jQuery("button#registerButtonAccount").on("mouseover", function(){
   jQuery(this).css({"background-color": "white", "color": "green", "cursor": "pointer"}); 
  }); 

  jQuery("button#registerButtonAccount").on("mouseleave", function(){
    jQuery(this).css({"background-color": "green", "color": "white"}); 
  }); 

  jQuery("button#registerButtonAccount").on("click", function(){
    //display message
    var inputLength = jQuery("input#password").val().length;
    if(jQuery("input#password").val().length == 0 || jQuery("input#username").val().length == 0){
      if (jQuery("input#password").val().length == 0){
        jQuery("p#Notice").css({"background-color": "red", "color": "white", "width": "100%", "text-align": "center"}); 
        jQuery("p#Notice").html("Please enter your password");
      }
      else if (jQuery("input#username").val().length == 0){
        jQuery("p#Notice").css({"background-color": "red", "color": "white", "width": "100%", "text-align": "center"}); 
        jQuery("p#Notice").html("Please enter your username");
      }
    } 
    else{
      if (jQuery("input#password").val().length < 8){
        jQuery("p#Notice").css({"background-color": "red", "color": "white", "width": "100%", "text-align": "center"}); 
        jQuery("p#Notice").html("Password length too short. <br><br> Your current password length is: " + jQuery("input#password").val().length + " characters long. Your password need to be at least 8 characters long.");
      }
      else { 
        var claimSettings = {
          "async": true,
          "crossDomain": true,
          "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          }
        }
        jQuery.ajax(claimSettings).done(function(getResponse){
          var flag = false; 
          for (let i = 0; i < getResponse.length; i++){
            if (getResponse[i].username == jQuery("input#username").val()){
              flag = true; 
            }
          }
          if (flag == false){
            //length more than 8
            //test for password strength.
            //check membership
            jQuery("p#Notice").css({"background-color": "green", "color": "white", "text-align": "center"}); 
            jQuery("button#registerButtonAccount").prop({"disabled": "true"}); 
            jQuery("button#registerButtonAccount").css({"opacity": 0.5, "cursor": "not-allowed"}); 
            jQuery("p#Notice").html("Registering....");
            jQuery("p#Notice").after('<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_Z4BhGL.json"  background="transparent"  speed="1"  style="width: 100px; height: 100px"  loop  autoplay></lottie-player>'); 

            var currentDate = new Date(); 
            var temp = jQuery("input#username").val(); 
            var temp1 = jQuery("input#password").val(); 
            var jsondata = {
              "username": temp, 
              "password": temp1, 
              "accountCreationDate": currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate(), 
              "accountCreationTime": currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(), "loginStatus": false,
              "pointsPossessed":0,
              "sGameHighScore":0,
              "minesweeperHighScore":0,
              "boardGameHighScore":0, 
              "accountIsMappedTo": null
            }

            var settingsToJson = {
              "async": true,
              "crossDomain": true,
              "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                "x-apikey": "61d254f5ccd0211b32089499",
                "cache-control": "no-cache"
              },
              "processData": false,
              "data": JSON.stringify(jsondata)
            }

            jQuery.ajax(settingsToJson).done(function(response){
              //display welcome message. 
              jQuery("div.loginCard").html("<h2> Hello New User, " + jQuery("input#username").val()+ "</h2><br><br>"); 
              function RedirectBackToHomepage(){
                window.location.replace("https://MainPage.masterzy1234.repl.co"); 
              }
              setTimeout(RedirectBackToHomepage, 5000); 
            }); 
          } 
          else {
            jQuery("p#Notice").html("Duplicate username found. Please try a different username");
          }
        }); 
      } 
    }
  }); 
}); 

//if login, get username from API and compare password
jQuery("div.formCluster").after("<div id = \"errorMsg\"></div>");
jQuery("div#errorMsg").css({"width": "100%", "background-color": "red", "border-radius": "5px",   "color": "white", "height": "50px", "display": "flex", "justify-content": "center", "align-items": "center"}); 
jQuery("div#errorMsg").hide(); 

//when the login button is pressed. 
jQuery("button#logInButton").on("click", function(){
  if(jQuery("input#passwordInput").length == 0 || jQuery("input#usernameInput").length == 0){
    if (jQuery("input#usernameInput").length == 0){
      //append message "Please enter a username"
      jQuery("div#errorMsg").show(); 
      jQuery("div#errorMsg").html("Please enter a username"); 
    }
    else if (jQuery("input#passwordInput").length == 0){
      //append message "Please enter a password"
      jQuery("div#errorMsg").show(); 
      jQuery("div#errorMsg").html("Please enter a password"); 
    }
  }
  else{
    jQuery("div#errorMsg").hide(); 
    jQuery("button#resetButton").hide(); 
    jQuery(this).css({"background-color": "green", "color": "white", "width": "100%", "cursor": "not-allowed", "opacity": 0.5}); 
    jQuery(this).prop({"disabled": true});
    jQuery("button#CreateNewAccount").hide(); 
    jQuery(this).html("Logging you in...."); 
    jQuery(this).after('<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_Z4BhGL.json"  background="transparent"  speed="1"  style="width: 100px; height: 100px"  loop  autoplay></lottie-player>'); 

    //form ajax get 
    var apiSettings = {
      "async": true,
      "crossDomain": true,
      "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      }
    }

    var inputUsername = jQuery("input#usernameInput").val(); 
    var inputPassword = jQuery("input#passwordInput").val(); 
    console.log(inputUsername); 
    var tempArray = []; 
    jQuery.ajax(apiSettings).done(function(response){
      for (let j = 0; j < response.length; j++){
        tempArray.push(response[j].username); 
      }
      var existance; 
      var targetUsername; 
      var tempHoldingPassword; 
      for (let index = 0; index < response.length; index++){
        if (tempArray.includes(inputUsername)){
          tempHoldingPassword = response[index].password;
          if (tempHoldingPassword == inputPassword){
            existance = true; 
          }
          else{
            existance = false; 
          }
        }
        else {
          existance = false; 
        }
      }
      //if username error or incorrect password
      if (existance == false){
        jQuery("div#errorMsg").show(); 
        jQuery("div#errorMsg").html("Incorrect password or username. Please check."); 
        jQuery("button#CreateNewAccount").show(); 
        jQuery("button#resetButton").show(); 
        jQuery("button#logInButton").css({"background-color": "green", "color": "white","transition": "background-color 1s, color 1s", "width": "50%", "cursor": "pointer", "opacity": 1});
        jQuery("button#logInButton").html("Log In")
        jQuery("button#logInButton").prop({"disabled": false}); 
        jQuery("lottie-player").hide(); 
      }
      else {
        jQuery("body").css({"background-image": "linear-gradient(45deg, lightblue, white, lightblue)", "display": "flex", "justify-content": "center", "align-items": "center"}); 
        jQuery("body").html('Authentication successful<br><br><lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ObshHL.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>'); 
        //run the put method...
        var return1 = Math.floor((Math.random() * 4294967295), 0); 
        var return2 = Math.floor((Math.random() * 4294967295), 0); 
        var concat = return1 ^ return2; 
        
        localStorage.setItem("sessionID", concat); 
        localStorage.setItem("username", inputUsername); 
        //we will need to post this message into other domains...
        function PostMessageToAnotherLocalStorage(){
          
        }
        var postIntoFinal = {
          "async": true,
          "crossDomain": true,
          "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation`,
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": "61d254f5ccd0211b32089499",
            "cache-control": "no-cache"
          },
        }

        jQuery.ajax(postIntoFinal).done(function (responseGiven) {
          let i; 
          var targetObjectID; 
          for (i = 0; i < responseGiven.length; i++){
            if (responseGiven[i].username == inputUsername){
              targetObjectID = responseGiven[i]._id
            }
          }

          var jsondata = {"accountIsMappedTo": concat, "loginStatus": true};
          console.log(jsondata.accountIsMappedTo);
          var settingsPutIntoFinal = {
            "async": true,
            "crossDomain": true,
            "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${targetObjectID}`,
            "method": "PUT",
            "headers": {
              "content-type": "application/json",
              "x-apikey": "61d254f5ccd0211b32089499",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
          }

          jQuery.ajax(settingsPutIntoFinal).done(function(responseOut){
            jQuery("body").html("<h2> WELCOME BACK " + inputUsername + "</h2>");
            function DISAPPEARLAH(){
              jQuery("body").css({"opacity": 0}); 
            } 
            setTimeout(DISAPPEARLAH, 500);
            function REDIRECTLAH(){
              window.location.href = "https://MainPage.masterzy1234.repl.co/gamesPage.html";
            }
            setTimeout(REDIRECTLAH, 2050); 
          }); 
        });
      }
    }); 
  } 
}); 

