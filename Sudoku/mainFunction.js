//default value set to null
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

something = localStorage.getItem("username");  
//read from block element and perform 
jQuery("button#proceed").on("click", function(){
  jQuery("div#loading").css({"display": "flex"}); 
  var hintsUsed = parseInt(jQuery("div#numSpace").html());
  var identifyUser = {
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
  //deduct number of hints from API once the GO button is pressed.
  var wantedID; 
  var existingSudokuHints; 
  jQuery.ajax(identifyUser).done(function(reply){
    for (let index = 0; index < reply.length; index++){
      if (reply[index].username == something){
        wantedID = reply[index]._id; 
        existingSudokuHints = reply[index].noOfHintsSudoku; 
      }
    }
    var jsondata = {"noOfHintsSudoku": existingSudokuHints - hintsUsed};

    var someRandomSettings = {
      "async": true,
      "crossDomain": true,
      "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${wantedID}`,
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      }, 
      "processData": false,
      "data": JSON.stringify(jsondata) 
    }

    jQuery.ajax(someRandomSettings).done(function(){
      jQuery("div#loading").css({"display": "none"}); 
    }); 
  });
}); 



jQuery(document).ready(function(){
  jQuery("lottie-player#verifyLogIn").css({"display": "none"}); 
  jQuery("span#numberOfMinesweeperHints").hide(); 
  jQuery("small").eq(0).hide(); 
  jQuery("div#block").hide(); 
  jQuery("p#someMessage").hide();
  jQuery("button#purchaseMoreMinesweeperHints").hide(); 
  jQuery("button#signIn").hide();
  jQuery("lottie-player#aLottiePlayerDealWithIt").hide(); 
  jQuery("p#default").hide(); 
  jQuery("p#username").hide(); 
});

//repeat the following the function for 5 seconds
function Re () { 
  something = localStorage.getItem("username"); 
  if (something == null){
    function KEEPAPPEARINGEVERYFIVESECONDS(){
      jQuery("lottie-player#verifyLogIn").css({"display": "block"}); 
    }
    setInterval(KEEPAPPEARINGEVERYFIVESECONDS, 5000);
    function NOWDISAPPEARLEH(){
      jQuery("lottie-player#verifyLogIn").css({"display": "none"}); 
    }
    setInterval(NOWDISAPPEARLEH, 6000);  
    jQuery("button#signIn").show();
    jQuery("p#someMessage").show();  
    jQuery("button#purchaseMoreMinesweeperHints").hide();
    jQuery("lottie-player#aLottiePlayerDealWithIt").hide();
    jQuery("div#block").hide();
    jQuery("span#numberOfMinesweeperHints").hide();
    jQuery("p#default").show(); 
    jQuery("p#username").hide(); 
  }
  else { //if the user has been signed in. 
    //hide the message
    jQuery("lottie-player#verifyLogIn").hide();
    jQuery("p#someMessage").hide(); 
    jQuery("button#purchaseMoreMinesweeperHints").show(); 
    jQuery("button#signIn").hide();
    jQuery("lottie-player#aLottiePlayerDealWithIt").show(); 
    jQuery("p#default").hide(); 
    jQuery("p#username").show();
    jQuery("p#username").html("Signed in as: " + something); 
    var verifyWhoThatIsLOL = {
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
    //constantly update the number of hints every 5 seconds.... 
    jQuery.ajax(verifyWhoThatIsLOL).done(function(reply){
      var currentMinesweeperHints;
      for (let i = 0; i < reply.length; i++){
        if (reply[i].username == something){
          targetID = reply[i]._id; 
          currentMinesweeperHints = reply[i].noOfHintsMinesweeper
          loginStauts = reply[i].loginStatus; 
        }
      }
      jQuery("lottie-player#aLottiePlayerDealWithIt").hide(); 
      jQuery("span#numberOfMinesweeperHints").html("You currently have " + currentMinesweeperHints + " hints available");
      jQuery("span#numberOfMinesweeperHints").show(); 
      jQuery("button#purchaseMoreMinesweeperHints").show();
      jQuery("small").show();
      jQuery("div#block").show(); 
    }); 
  } 
} 
setInterval(Re, 5000);

//now check whether the user has been signed into the in game system. If the user has not done so, show a message that prompts the user to sign in. 

//disable scroll.
jQuery("body").css({"overflow-y": "hidden"});

//increase the number in the box by 1.... 
jQuery("div.controlType").eq(0).on("click", function(){
  var num = parseInt(jQuery("div#numSpace").html()); 
  var insert = num + 1; 
  jQuery("div#numSpace").html(insert); 
}); 

//decrease the number in the box by 1.....
jQuery("div.controlType").eq(1).on("click", function(){
  var num = jQuery("div#numSpace").html();
  var insert = num - 1; 
  if (insert < 0){
    console.log("Not allowed"); 
  }
  else { 
    jQuery("div#numSpace").html(insert);
  }
}); 


var a = document.querySelectorAll(".card");
var b = document.querySelectorAll(".individualCell"); 

jQuery("button#proceed").on("click", function(){
  //a.length is 9. 
  var target; 
  jQuery("div.card").on("mouseover", function(){
    jQuery(this).css({"cursor": "pointer"}); 
  }); 
  jQuery("div.card").on("click", function(){
    jQuery("div.card").css({"background-color": "white"}); 
    target = jQuery(this).html(); 
    jQuery(this).css({"background-color": "yellow"});
    jQuery("span#selectedTile").html(target); 
  });

  jQuery("div.individualCell").on("click", function(){
    jQuery(this).css({"background-color": "white"});
    if (target != undefined){
      if (jQuery(this).html().length == 0){
        jQuery(this).append(target);
        jQuery("div.card").eq(target - 1).css({"background-color": "white"})
        target = undefined; 
      }
    }
  }); 

  //delete a number from the box
  jQuery("i#removeNumber").on("click", function(){
    jQuery("body").css({"background-color": "black"}); 
    jQuery("header").hide()
    jQuery("div#status").hide();
    jQuery("footer").hide();
    jQuery("div#mainFrame").css({"background-color": "white"}); 
    jQuery("div#rowIndicator").css({"background-color": "white"});
    for (let i = 0; i < a.length; i++){
      jQuery("div.card").eq(i).hide();
    }
    jQuery("div#selectionBar").hide();
    jQuery("div#selectionBar").after("<div style = \"display: flex; flex-direction:column\" id = \"information\"><div style = \"color: white;\">Please select a tile. When you are done, click on the tick.</div><div style = \"display: flex; flex-direction: row; justify-content: space-between\" id = \"Control\"><i class = \"material-icons\" style = \"color: white; font-size: 75px\" id = \"confirmDontWant\">clear</i><i class = \"material-icons\" style = \"color: white; font-size: 75px\" id = \"confirmClear\">check</i></div></div>"); 

    //now we will do the handling...
    jQuery("div#Control").after("<div style = \"display: flex; justify-content: center; align-items: center; width: 100%; height: 150px; background-color: red\" id = \"Warning\"></div>");
    jQuery("div#Warning").hide(); 
    jQuery("div.individualCell").on("click", function(){
      if (jQuery(this).html().length != 0 && jQuery(this).css("color") != "rgb(255, 0, 0)"){
        jQuery(this).css({"background-color": "yellow"});
      }
      else {
        //tell the player that there is nothing located within the cell...
        jQuery("div#Warning").show(); 
        jQuery("div#Warning").html("This cell does not have any value inside");
      }
    }); 
    jQuery("i#confirmDontWant").css({"cursor": "pointer"}); 
    jQuery("i#confirmDontWant").on("click", function(){
      jQuery("header").show()
      jQuery("div#status").show();
      jQuery("footer").show();
      jQuery("body").css({"background-color": "none"}); 
      jQuery("div#selectionBar").show(); 
      for (let i = 0; i < a.length; i++){
        jQuery("div.card").eq(i).show();
      }
      jQuery("div#information").hide(); 
      jQuery("div#selectionBar").css({"background-color": "white"});
      //reset all the tile color
      for (let j = 0; j < b.length; j++){
        jQuery("div.individualCell").eq(j).css({"background-color": "white"}); 
        jQuery("div.individualCell").on("click", function(){
          jQuery(this).css({"background-color": "white"});
        }); 
      }
    });
    
    jQuery("i#confirmClear").css({"cursor": "pointer"});  
    jQuery("i#confirmClear").on("click", function(){
      for (let k = 0; k < b.length; k++){
        if (jQuery("div.individualCell").eq(k).css("background-color") == "rgb(255, 255, 0)"){
          jQuery("div.individualCell").eq(k).html(null);
          jQuery("div.individualCell").eq(k).css({"background-color": "white"});
        }
      } 
    });  
  }); 

  //the one that looks like a cross..
  jQuery("i#clearAll").on("click", function(){
      var confirmationClearAll = confirm("Are you sure you want to remove the numbers that you have placed into the boxes? This action cannot be undone. Click on the 'Cancel' button to abort this action."); 
      if (confirmationClearAll == true){
        for(let i = 0; i < b.length; i++){
          if (b.eq(i).css("color") != "rgb(255, 0, 0)"){
            jQuery("div.individualCell").eq(i).html(null);  
          }
        }
      }
  }); 

  //the one that looks like a refresh button....
  jQuery("i#restartGame").on("click", function(){
    var confirmRestartGame = confirm("You have just clicked on the 'restart' button. The game will now reload. All progress will be lost! Do you wish to continue?"); 
    if (confirmRestartGame == true){
      window.location.reload();
    } 
  }); 

  jQuery("select#select").on("click", function(){
    jQuery(this).css({"border-style": "solid", "border-color": "lightblue", "border-width": "1px"});
  });

  //Opening the buy powerups popup menu
  jQuery("div#BuyTools").on("click", function(){

    //redirect below if the player did not login......
    jQuery("body").css({"overflow-y": "hidden"});
    jQuery("div#TranslucentBlackColorBase1").css({"display": "flex", "background-color": "rgb(0, 0, 0, 0)"});
    jQuery("div#BuyPowerups").css({"opacity": 0});
    function YeahAFunction(){
      jQuery("div#TranslucentBlackColorBase1").css({"background-color": "rgb(0, 0, 0, 0.5)"});
      jQuery("div#BuyPowerups").css({"opacity": 1});
    }
    setTimeout(YeahAFunction, 500);
    jQuery("i#closeLogIn").on("click", function(){
      jQuery("div#BuyPowerups").css({"opacity": 0});
      jQuery("div#TranslucentBlackColorBase1").hide();
      jQuery("div#TranslucentBlackColorBase2").css({"display": "flex", "background-color": "rgb(0, 0, 0, 0)"});
      jQuery("div#confirmation").css({"opacity": 0}); 
      function MakeTextAppear(){
        jQuery("div#TranslucentBlackColorBase2").css({"background-color": "rgb(0, 0, 0, 0.5)"})
        jQuery("div#confirmation").css({"opacity": 1}); 
      }
      setTimeout(MakeTextAppear, 1050)
      //contain keypress event listener within the click event listener

      var keyPressed; 
      jQuery(window).on("keydown", function(){
        keyPressed = event.key; 
        if (keyPressed == "y" || keyPressed == "Y"){
          jQuery("div#confirmation").css({"opacity": 0}); 
          jQuery("div#TranslucentBlackColorBase2").css({"background-color": "rgb(0, 0, 0, 0)"});
          function RemoveOldBackground(){
            jQuery("div#TranslucentBlackColorBase2").css({"display": "none"}); 
            jQuery("div#TranslucentBlackColorBase1").css({"display": "flex", "background-color": "rgb(0, 0, 0, 0)"});
            jQuery("div#BuyPowerups").css({"opacity": 0}); 
          } 
          setTimeout(RemoveOldBackground, 100); 
          function Appear(){ 
            jQuery("div#BuyPowerups").css({"opacity": 1})
          } 
          setTimeout(Appear, 1050); 
        }
        else if (keyPressed == "n" || keyPressed == "N"){
          jQuery("div#confirmation").css({"opacity": 0}); 
          function RemoveBacking(){     
            jQuery("div#TranslucentBlackColorBase2").css({"background-color": "rgb(0, 0, 0, 0)", "display": "none"}); 
          }
          setTimeout(RemoveBacking, 1050);
          jQuery("body").css({"overflow-y": "scroll"});
        }
      });

      jQuery("button#disagree").on("click", function(){
          jQuery("div#confirmation").css({"opacity": 0}); 
          function RemoveBacking(){     
            jQuery("div#TranslucentBlackColorBase2").css({"background-color": "rgb(0, 0, 0, 0)", "display": "none"}); 
          }
          setTimeout(RemoveBacking, 1050);
          jQuery("body").css({"overflow-y": "scroll"});
      });

      jQuery("button#agree").on("click", function(){
        jQuery("div#confirmation").css({"opacity": 0}); 
        jQuery("div#TranslucentBlackColorBase2").css({"background-color": "rgb(0, 0, 0, 0)"});
        function RemoveOldBackground(){
          jQuery("div#TranslucentBlackColorBase2").css({"display": "none"}); 
          jQuery("div#TranslucentBlackColorBase1").css({"display": "flex", "background-color": "rgb(0, 0, 0, 0)"});
          jQuery("div#BuyPowerups").css({"opacity": 0}); 
        } 
        setTimeout(RemoveOldBackground, 100); 
        function Appear(){ 
          jQuery("div#TranslucentBlackColorBase2").css({"background-color": "rgb(0, 0, 0, 0.5"}); 
          jQuery("div#BuyPowerups").css({"opacity": 1})
        } 
        setTimeout(Appear, 1050);
      });
    }); 
  }); 

    //this function only works once LOL
  jQuery("div#BuyTools").on("mouseover", function(){
    jQuery(this).css({"cursor": "pointer", "background-color": "yellow", "color": "green"}); 
  });
  
  jQuery("div#BuyTools").on("mouseleave", function(){
    jQuery(this).css({"cursor": "default", "background-color": "green", "color": "yellow"});
  }); 

  //redirect back to the homepage.
  jQuery("i#goBackToMainMenu").on("click", function(){
    jQuery("body").css({"opacity": 0}); 
    function Redirect(){
      window.location.href = "https://MainPage.masterzy1234.repl.co";
    }
    setTimeout(Redirect, 1050);
  });
}); 

//console.log(Math.floor(Math.random() * 4294967295)) 

//Perform AJAX get request to check for whether the player has been signed in. If not, the player is unable to purchase powerups from the shop, but he can still play the game for free. 
//perform AJAX get request to check for the number of points the player actually has. 





