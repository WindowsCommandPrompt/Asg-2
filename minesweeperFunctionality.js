//WARNING! heavy javascript. Do not attempt to run this code on IE10 or earlier. Do not attempt to run this code on computers with CPUs manufactured before the year 2017. Frequent lags may occur. Certain animations might not work as expected.
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

//exit to the main menu 
jQuery("i#goBack").on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  function Redirect(){
    window.location.href = "https://MainPage.masterzy1234.repl.co/gamesPage.html"; 
  }
  setTimeout(Redirect, 2000);
}); 

//whether to give bonus points or not.. 
function BonusQuestionMark(){
  
}

//5 hints 
jQuery("button.getItem").eq(0).on("click", function(){
  jQuery("div.minesweeperPowerUpShop").eq(0).css({"background-color": "rgb(0, 0, 0, 0)"}); 
  function DisplayTheItem(){
    jQuery("div.minesweeperPowerUpShop").eq(0).css({"display": "flex"}); 
  }
  setTimeout(DisplayTheItem, 500);
  function Appear(){
    jQuery("div.minesweeperPowerUpShop").eq(0).css({"background-color": "rgb(0, 0, 0, 0.65)"}); 
  }
  setTimeout(Appear, 1000); 
}); 

something = localStorage.getItem("username");  

var getFromAPI = {
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

var score; 
var required; 
var existingPoints; 
var existingMinesweeperHints; 
jQuery.ajax(getFromAPI).done(function(reply){
  for (let i = 0; i < reply.length; i++){
    if(reply[i].username == something){
      score = reply[i].pointsPossessed; 
      required = reply[i]._id; 
      existingPoints = reply[i].pointsPossessed; 
      existingMinesweeperHints = reply[i].noOfHintsMinesweeper; 
    }
  }
  jQuery("lottie-player.switcher").hide();
  jQuery("span.points").html(score);
}); 

//share a common API settings....
var someSettings = {
  "async": true,
  "crossDomain": true,
  "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation${required}`,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "61d254f5ccd0211b32089499",
    "cache-control": "no-cache"
  }
} 

function RedirectBackToTheGamingPage(){
  window.location.href = "https://masterzy1234.repl.co/minesweeper.html";
}

//if the person wishes to purchase the items... 
jQuery("button.purchaseItemsInGame").eq(0).on("click", function(){
  jQuery("div#BACKGROUNDTRANSACTION").css({"display": "flex"});
  jQuery("lottie-player#transactionCompleted").hide(); 
  jQuery("p#successful").hide(); 
  //add 5..  
  var jsondata = {"pointsPossessed": existingPoints - 195, "noOfHintsMinesweeper": existingMinesweeperHints + 5}; 

  jQuery.ajax(someSettings).done(function(){
    jQuery("lottie-player#transactionCompleted").show(); 
    jQuery("lottie-player#confirmingTransaction").hide(); 
    jQuery("p#successful").show(); 
    setTimeout(RedirectBackToTheGamingPage, 2500); 
  }); 
}); 

jQuery("button.purchaseItemsInGame").eq(1).on("click", function(){
  jQuery("div#BACKGROUNDTRANSACTION").css({"display": "flex"}); 
  jQuery("lottie-player#transactionCompleted").hide(); 
  jQuery("p#successful").hide(); 
  //add 10.. 
  var jsondata = {"pointsPossessed": existingPoints - 290, "noOfHintsMinesweeper": existingMinesweeperHints + 10}; 

  jQuery.ajax(someSettings).done(function(){
    jQuery("lottie-player#transactionCompleted").show(); 
    jQuery("lottie-player#confirmingTransaction").hide(); 
    jQuery("p#successful").show(); 
    setTimeout(RedirectBackToTheGamingPage, 2500); 
  }); 
}); 

jQuery("button.purchaseItemsInGame").eq(2).on("click", function(){
  jQuery("div#BACKGROUNDTRANSACTION").css({"display": "flex"}); 
  jQuery("lottie-player#transactionCompleted").hide(); 
  jQuery("p#successful").hide(); 
  //add 20.. 
  var jsondata = {"pointsPossessed": existingPoints - 570, "noOfHintsMinesweeper": existingMinesweeperHints + 20};

  jQuery.ajax(someSettings).done(function(){
    jQuery("lottie-player#transactionCompleted").show(); 
    jQuery("lottie-player#confirmingTransaction").hide(); 
    jQuery("p#successful").show(); 
    setTimeout(RedirectBackToTheGamingPage, 2500); 
  }); 
}); 

//close the pop up mineCounter
jQuery("i#closeFirst").on("click", function(){
  jQuery("div.minesweeperPowerUpShop").eq(0).css({"display": "none"}); 
}); 

//close the second pop up mineCounter 
jQuery("i#closeSecond").on("click", function(){
  jQuery("div.minesweeperPowerUpShop").eq(1).css({"display": "none"}); 
}); 

//close the third pop up minecounter
jQuery("i#closeThird").on("click", function(){
  jQuery("div.minesweeperPowerUpShop").eq(2).css({"display": "none"}); 
}); 

//10 hints
jQuery("button.getItem").eq(1).on("click", function(){
  jQuery("div.minesweeperPowerUpShop").eq(1).css({"background-color": "rgb(0, 0, 0, 0)"}); 
  function DisplayTheItem(){
    jQuery("div.minesweeperPowerUpShop").eq(1).css({"display": "flex"}); 
  }
  setTimeout(DisplayTheItem, 500); 
  function Appear(){
    jQuery("div.minesweeperPowerUpShop").eq(1).css({"background-color": "rgb(0, 0, 0, 0.65)"}); 
  }
  setTimeout(Appear, 1000); 
}); 

//20 hints
jQuery("button.getItem").eq(2).on("click", function(){
  jQuery("div.minesweeperPowerUpShop").eq(2).css({"background-color": "rgb(0, 0, 0, 0)"}); 
  function DisplayTheItem(){
    jQuery("div.minesweeperPowerUpShop").eq(2).css({"display": "flex"}); 
  }
  setTimeout(DisplayTheItem, 500); 
  function Appear(){
    jQuery("div.minesweeperPowerUpShop").eq(2).css({"background-color": "rgb(0, 0, 0, 0.65)"}); 
  }
  setTimeout(Appear, 1000); 
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

var currentMinesweeperHints;
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
      for (let i = 0; i < reply.length; i++){
        if (reply[i].username == something){
          targetID = reply[i]._id; 
          currentMinesweeperHints = reply[i].noOfHintsMinesweeper
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
  if (num < 40){ 
    if (num < currentMinesweeperHints){
      var insert = num + 1; 
      jQuery("div#numSpace").html(insert); 
    } 
  } 
  else{
    jQuery("div#error").css({"height": "0%", "opacity": 0}); 
    function SLOWLY(){
      jQuery("div#max").css({"display": "flex"});
    }
    setTimeout(SLOWLY, 500)
    function Appear(){
      jQuery("div#error").css({"height": "100%", "opacity": 1}); 
    } 
    setTimeout(Appear, 1000);
    function Disappear(){
      jQuery("div#error").css({"height": "0%", "opacity": 0}); 
    }
    setTimeout(Disappear, 3000); 
    function GetLost(){
      jQuery("div#max").css({"display": "none"});
    } 
    setTimeout(GetLost, 3500);
  }
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

jQuery("button#no").on("click", function(){
  jQuery("div.noHintsSelectedConfirmation").css({"display": "none"}); 
}); 

jQuery("button#yes").on("click", function(){
  //one to the right -> currentEQIndex + 1
  //one to the left -> currentEQIndex - 1 
  //one below -> currentEQIndex + 21
  //one top -> currentEQIndex - 21 
  //one top left -> currentEQIndex - 22 
  //one top right -> currentEQIndex - 20
  //one bottom left -> currentEQIndex + 20
  //one bottom right -> currentEQIndex + 22
  jQuery("div.noHintsSelectedConfirmation").css({"display": "none"});
  jQuery("div.interface").eq(0).html('<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_58vkk48j.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Your game is loading.....');
  
  function CreateDelay(){
  var a = document.querySelectorAll("td");
  function RandomNumberGeneratorForPlacementOfMines(){
    var location = Math.round((Math.random() * a.length), 0); 
    if (location != a.length){
      return location; 
    }
  }
  let newSet = new Set(); 
  var minesPresent = 0; 
  do {
    newSet.add(RandomNumberGeneratorForPlacementOfMines()); 
  }
  while (newSet.size < 50)
  var arr = []; 
  var returnSet = newSet.values();
  var box1 = returnSet.next().value; 
  var box2 = returnSet.next().value;
  var box3 = returnSet.next().value;
  var box4 = returnSet.next().value;
  var box5 = returnSet.next().value;
  var box6 = returnSet.next().value;
  var box7 = returnSet.next().value;
  var box8 = returnSet.next().value;
  var box9 = returnSet.next().value;
  var box10 = returnSet.next().value;
  var box11 = returnSet.next().value;
  var box12 = returnSet.next().value;
  var box13 = returnSet.next().value;
  var box14 = returnSet.next().value;
  var box15 = returnSet.next().value;
  var box16 = returnSet.next().value;
  var box17 = returnSet.next().value;
  var box18 = returnSet.next().value;
  var box19 = returnSet.next().value; 
  var box20 = returnSet.next().value;
  var box21 = returnSet.next().value;
  var box22 = returnSet.next().value;
  var box23 = returnSet.next().value;
  var box24 = returnSet.next().value;
  var box25 = returnSet.next().value;
  var box26 = returnSet.next().value;
  var box27 = returnSet.next().value;
  var box28 = returnSet.next().value;
  var box29 = returnSet.next().value;
  var box30 = returnSet.next().value;
  var box31 = returnSet.next().value;
  var box32 = returnSet.next().value;
  var box33 = returnSet.next().value;
  var box34 = returnSet.next().value;
  var box35 = returnSet.next().value;
  var box36 = returnSet.next().value;
  var box37 = returnSet.next().value;
  var box38 = returnSet.next().value;
  var box39 = returnSet.next().value;
  var box40 = returnSet.next().value;
  var box41 = returnSet.next().value;
  var box42 = returnSet.next().value;
  var box43 = returnSet.next().value;
  var box44 = returnSet.next().value;
  var box45 = returnSet.next().value;
  var box46 = returnSet.next().value;
  var box47 = returnSet.next().value;
  var box48 = returnSet.next().value;
  var box49 = returnSet.next().value;
  var box50 = returnSet.next().value;
  arr.push(box1);
  arr.push(box2); 
  arr.push(box3); 
  arr.push(box4); 
  arr.push(box5); 
  arr.push(box6); 
  arr.push(box7); 
  arr.push(box8); 
  arr.push(box9); 
  arr.push(box10); 
  arr.push(box11); 
  arr.push(box12); 
  arr.push(box13); 
  arr.push(box14); 
  arr.push(box15); 
  arr.push(box16);
  arr.push(box17);
  arr.push(box18); 
  arr.push(box19); 
  arr.push(box20); 
  arr.push(box21); 
  arr.push(box22); 
  arr.push(box23); 
  arr.push(box24); 
  arr.push(box25); 
  arr.push(box26);
  arr.push(box27); 
  arr.push(box28);
  arr.push(box29);
  arr.push(box30); 
  arr.push(box31); 
  arr.push(box31); 
  arr.push(box32);
  arr.push(box33);
  arr.push(box34);
  arr.push(box35); 
  arr.push(box36); 
  arr.push(box37); 
  arr.push(box38); 
  arr.push(box39); 
  arr.push(box40); 
  arr.push(box41); 
  arr.push(box42);
  arr.push(box43); 
  arr.push(box44); 
  arr.push(box45); 
  arr.push(box46);
  arr.push(box47);
  arr.push(box48);
  arr.push(box49);
  arr.push(box50);
  //red boxes is where the mines would be laid.
  for (let index = 0; index < arr.length; index++){
    jQuery("td").eq(arr[index]).css({"background-color": "red"});
  }

  //loop through all the td elements
  var mineCounter = 0;
  var allIndexPosition = []; //contains transparent tiles...
  var firstRowIndex = []; 
  var farthestRightColumn = []; 
  var rejected = [];
  for (let j = 0; j < jQuery("td").length; j++){
    if (jQuery("td").eq(j).css("background-color") != "rgb(255, 0, 0)"){
      //looking for white tiles.. must be 412
      // j > 21 -> ignore first row
      // j < 440 -> ignore last row 
      // j % 21 != 0 -> ignore first column; 
      if (j % 20 == 0){
        jQuery("td").eq(j).css({"background-color": "transparent"});
        farthestRightColumn.push(j); 
        for (let k = 0; k < jQuery("td").length; k++){
          jQuery("td").eq(k).html("<p></p>"); 
        }
      }

      if (j > 21 && j < 440 && j % 21 != 0){
        jQuery("td").eq(j).css({"background-color": "transparent"});
        allIndexPosition.push(j); 
        for (let k = 20; k <= 419; k += 21){
          jQuery("td").eq(k).html("<p></p>");
        }
      }
      else if (j <= 20){
        jQuery("td").eq(j).css({"background-color": "transparent"}); 
        firstRowIndex.push(j); 
        for (let k = 0; k <= 20; k++){
          jQuery("td").eq(k).html("<p></p>");
        }
      }
    }
  }

  for (let item = 0; item < farthestRightColumn.length; item++){
    var minesFound; 
    var temp = farthestRightColumn[item]; 
    var var1 = temp - 1;
    var var2 = temp + 20;
    var var3 = temp + 21;
    var var4 = temp - 21;
    var var5 = temp - 22;
    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
      minesFound = 1; 
      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + minesFound + "</p>");
    }  
  }

  for (let inTheList = 0; inTheList < firstRowIndex.length; inTheList++){
    var mines; 
    var temp = firstRowIndex[inTheList]; 
    var var1 = temp + 1; 
    var var2 = temp - 1; 
    var var3 = temp + 20;
    var var4 = temp + 21;
    var var5 = temp + 22;
    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
      mines = 1; 
      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
        if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
          mines = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          }  
        }
      } 
      else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
        if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
          mines = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
        }
      } 
      else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
        if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
          mines = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
          else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          } 
        }
      } 
      else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
        if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
          mines = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              mines = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            }
          }

          
        }
      } 
      else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
        if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
          mines = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
        }
      } 
    }
  }

  for (let index = 0; index < allIndexPosition.length; index++){
    //take the tile as reference. 
    //start from index position 0 
    var temp = allIndexPosition[index];
    var var1 = temp - 1; 
    var var2 = temp + 1; 
    var var3 = temp + 20; 
    var var4 = temp + 21; 
    var var5 = temp + 22; 
    var var6 = temp - 20; 
    var var7 = temp - 21; 
    var var8 = temp - 22; 
    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
      mineCounter = 1; 
      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mineCounter + "</p>");
      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //exclude 1 and 2
              if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 2 and 3
                  if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 2, 4
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      //ignore 1, 2, 3, 4

                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 2, 5
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 2, 6
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 2, 7
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }               
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 2, 8
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }  
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                }
              }
            }
          }
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //exclude 1 and 3
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 3 and 2
                  if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  } 
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 3, 4
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 3, 5
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 3, 6 
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 3, 7
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 3, 8
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }  
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
            }
          }
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 1 and 4 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 4 and 2 
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 4 and 3
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 4 and 5
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 4 and 6
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 4 and 7
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 4 and 8
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
            }
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 1 and 5. 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 5 and 2
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 5 and 3 
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 5 and 4 
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 5 and 6
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 5 and 7 
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                  //ignore 1, 5 and 8 
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }
                  else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      mineCounter = 5; 
                      jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    }
                  }


                  
                }
              }
            }
          }
          else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 1 and 6
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 1 and 7 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 1 and 8 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
        }
      }
      else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 2 and 1. 
              if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            } 
          }
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 2 and 3 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            } 
          }
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 2 and 4 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            } 
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 2 and 5 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            } 
          }
          else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 2 and 6 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            } 
          }
          else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 2 and 7 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            } 
          }
          else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 2 and 8 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            } 
          }
        }
      }
      else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 3 and 1.... 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 3 and 2 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 3 and 4 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }  
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 3 and 5 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 3 and 6 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 3 and 7 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 3 and 8 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }          
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }   
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }   
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }   
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }  
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }  
            }
          }
        }
      }
      else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 4 and 1. 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }  
            }
          }
          else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 4 and 2 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
            }
          }
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 4 and 3 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
            }
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 4 and 5
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }   
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
            }
          }
          else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 4 and 6 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
            }
          }
          else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 4 and 7 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
            }
          }
          else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 4 and 8 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(va7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              } 
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
        }
      }
      else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 1 and 5 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 5 and 2 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 5 and 3 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 5 and 4 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 5 and 6
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 5 and 7
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 5 and 8
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
        }
      }
      else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 6 and 1.. 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 6 and 2
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 6 and 3
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 6 and 4 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 6 and 5 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 6 and 7 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 6 and 8
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
        }
      }
      else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 7 and 1
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 7 and 2
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 7 and 3
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 7 and 4;
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 7 and 5 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 7 and 6 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 7 and 8
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
        }
      }
      else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
        if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
          mineCounter = 2; 
          jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 8 and 1 
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 8 and 2 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 8 and 3
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 8 and 4
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 8 and 5
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 8 and 6
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
          else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
              mineCounter = 3; 
              jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
              //ignore 8 and 7 
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
              else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  mineCounter = 4; 
                  jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                }
              }
            }
          }
        }
      }
    }
    else {
      jQuery("td").eq(temp).html(); 
    } 
  }

  //change the color of the numbers accordingly to avoid confusion
  if (jQuery("td").html() == 1){
    jQuery("td").css({"color": "blue"}); 
  }
  jQuery("body").css({"overflow-y": "scroll"}); 
  jQuery("div.BaseBlack").eq(0).css({"display": "none"});
  }
  setTimeout(CreateDelay, 1000);
}); 

//open up the shops page so that the person can buy the hints for the minesweeper game. 
jQuery("button#purchaseMoreMinesweeperHints").on("click", function(){
  var something = localStorage.getItem("username"); 
  if (something != null){
    jQuery("div#powerUpsShopMinesweeper").css({"background-color": "rgb(0, 0, 0, 0)"});
    jQuery("div#hints").css({"opacity": 0}); 
    function MakeItAppear(){
      jQuery("div#powerUpsShopMinesweeper").css({"display": "flex"}); 
    }
    setTimeout(MakeItAppear, 500); 
    function APPEARNOW(){
      jQuery("div#powerUpsShopMinesweeper").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
      jQuery("div#hints").css({"opacity": 1});
    }
    setTimeout(APPEARNOW, 1000); 
  }
  else{
    jQuery("div#signOnError").css({"background-color": "rgb(0, 0, 0, 0)"}); 
    jQuery("div#message").css({"opacity": 0}); 
    function MakeITAPPEAR(){
      jQuery("div#signOnError").css({"display": "flex"}); 
    }
    setTimeout(MakeITAPPEAR, 500); 
    function APPEARRR(){
      jQuery("div#signOnError").css({"background-color": "rgb(0, 0, 0, 0.75)"}); 
      jQuery("div#message").css({"opacity": 1}); 
    }
    setTimeout(APPEARRR, 1000);
  }
}); 

//close the hint shop do the reverse 
jQuery("i#closeHintShop").on("click", function(){
  jQuery("div#powerUpsShopMinesweeper").css({"background-color": "rgb(0, 0, 0, 0)"});
  jQuery("div#hints").css({"opacity": 0}); 
  function MakeItAppear(){
    jQuery("div#powerUpsShopMinesweeper").css({"display": "none"}); 
  }
  setTimeout(MakeItAppear, 500); 
}); 

jQuery("button#proceed").on("click", function(){
  var numOfHintsUsed;
  var numOfHintsUsed = parseInt(jQuery("div#numSpace").html()); 
  if (numOfHintsUsed == 0){
    //show the error message here. 
    jQuery("div.noHintsSelectedConfirmation").css({"display": "flex"}); 
  } 
  else { 
    jQuery("div#Backing").css({"display": "flex"}); 
    jQuery("div#loader").css({"display": "flex"});
    //deduct numOfHintsUsed from the api 
    var deductFromTheAPI = {
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

    jQuery.ajax(deductFromTheAPI).done(function(response){ 
      //get the _id of the person 
      //this variable is crucial for updating the data in the api. 
      var targetID; 
      var currentMinesweeperHints; 
      for (let i = 0; i < response.length; i++){
        if (something == response[i].username){
          targetID = response[i]._id; 
          currentMinesweeperHints = response[i].noOfHintsMinesweeper; 
        }
      }
      //run ajax put; 
      var jsondata = {"noOfHintsMinesweeper": currentMinesweeperHints - numOfHintsUsed}; 

      var settings = {
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

      jQuery.ajax(settings).done(function(){ 
        jQuery("div#Backing").css({"display": "none"}); 
        jQuery("div#loader").css({"display": "none"}); 
        //one to the right -> currentEQIndex + 1
        //one to the left -> currentEQIndex - 1 
        //one below -> currentEQIndex + 21
        //one top -> currentEQIndex - 21 
        //one top left -> currentEQIndex - 22 
        //one top right -> currentEQIndex - 20
        //one bottom left -> currentEQIndex + 20
        //one bottom right -> currentEQIndex + 22
        jQuery("div.interface").eq(0).html('<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_58vkk48j.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player><br><br>Your game is loading.....');
        //check if the user really wants to reload the page.... 
        jQuery(window).on("load", function(){
          if (numOfHintsUsed > 0){
            //warn the user that the hints that he or she used for this game session will go to waste. 
            var decision = confirm("Dear player, it seems like you have used some hints. If you refresh this page, your hints will not be refunded. Are you sure you want to continue?"); 
            if (decision == true){
              window.location.reload(); 
            }
            else{
              var typeText = prompt("1) Please key in 'exit' if you want to quit this game. \n 2) Please key in 'save' to save your game progress. This progress will be saved to your account later."); 
              if (prompt == "exit"){
                jQuery("body").css({"opacity": 0}); 
                function ChangeText(){
                  jQuery("body").html("<h1>Leaving game....</h1>"); 
                }
                setTimeout(ChangeText, 1000); 
                function RedirectBackToGamesPage(){
                  window.location.href = "https://MainPage.masterzy1234.repl.co";
                }
                setTimeout(RedirectBackToGamesPage, 3000); 
              }
            }
          }
        }); 
        function CreateDelay(){
        var a = document.querySelectorAll("td");
        function RandomNumberGeneratorForPlacementOfMines(){
          var location = Math.round((Math.random() * a.length), 0); 
          if (location != a.length){
            return location; 
          }
        }
        let newSet = new Set(); 
        var minesPresent = 0; 
        do {
          newSet.add(RandomNumberGeneratorForPlacementOfMines()); 
        }
        while (newSet.size < 50)
        var arr = []; 
        var returnSet = newSet.values();
        var box1 = returnSet.next().value; 
        var box2 = returnSet.next().value;
        var box3 = returnSet.next().value;
        var box4 = returnSet.next().value;
        var box5 = returnSet.next().value;
        var box6 = returnSet.next().value;
        var box7 = returnSet.next().value;
        var box8 = returnSet.next().value;
        var box9 = returnSet.next().value;
        var box10 = returnSet.next().value;
        var box11 = returnSet.next().value;
        var box12 = returnSet.next().value;
        var box13 = returnSet.next().value;
        var box14 = returnSet.next().value;
        var box15 = returnSet.next().value;
        var box16 = returnSet.next().value;
        var box17 = returnSet.next().value;
        var box18 = returnSet.next().value;
        var box19 = returnSet.next().value; 
        var box20 = returnSet.next().value;
        var box21 = returnSet.next().value;
        var box22 = returnSet.next().value;
        var box23 = returnSet.next().value;
        var box24 = returnSet.next().value;
        var box25 = returnSet.next().value;
        var box26 = returnSet.next().value;
        var box27 = returnSet.next().value;
        var box28 = returnSet.next().value;
        var box29 = returnSet.next().value;
        var box30 = returnSet.next().value;
        var box31 = returnSet.next().value;
        var box32 = returnSet.next().value;
        var box33 = returnSet.next().value;
        var box34 = returnSet.next().value;
        var box35 = returnSet.next().value;
        var box36 = returnSet.next().value;
        var box37 = returnSet.next().value;
        var box38 = returnSet.next().value;
        var box39 = returnSet.next().value;
        var box40 = returnSet.next().value;
        var box41 = returnSet.next().value;
        var box42 = returnSet.next().value;
        var box43 = returnSet.next().value;
        var box44 = returnSet.next().value;
        var box45 = returnSet.next().value;
        var box46 = returnSet.next().value;
        var box47 = returnSet.next().value;
        var box48 = returnSet.next().value;
        var box49 = returnSet.next().value;
        var box50 = returnSet.next().value;
        arr.push(box1);
        arr.push(box2); 
        arr.push(box3); 
        arr.push(box4); 
        arr.push(box5); 
        arr.push(box6); 
        arr.push(box7); 
        arr.push(box8); 
        arr.push(box9); 
        arr.push(box10); 
        arr.push(box11); 
        arr.push(box12); 
        arr.push(box13); 
        arr.push(box14); 
        arr.push(box15); 
        arr.push(box16);
        arr.push(box17);
        arr.push(box18); 
        arr.push(box19); 
        arr.push(box20); 
        arr.push(box21); 
        arr.push(box22); 
        arr.push(box23); 
        arr.push(box24); 
        arr.push(box25); 
        arr.push(box26);
        arr.push(box27); 
        arr.push(box28);
        arr.push(box29);
        arr.push(box30); 
        arr.push(box31); 
        arr.push(box31); 
        arr.push(box32);
        arr.push(box33);
        arr.push(box34);
        arr.push(box35); 
        arr.push(box36); 
        arr.push(box37); 
        arr.push(box38); 
        arr.push(box39); 
        arr.push(box40); 
        arr.push(box41); 
        arr.push(box42);
        arr.push(box43); 
        arr.push(box44); 
        arr.push(box45); 
        arr.push(box46);
        arr.push(box47);
        arr.push(box48);
        arr.push(box49);
        arr.push(box50);
        //red boxes is where the mines would be laid.
        for (let index = 0; index < arr.length; index++){
          jQuery("td").eq(arr[index]).css({"background-color": "red"});
        }

        //loop through all the td elements
        var mineCounter = 0;
        var allIndexPosition = []; //contains transparent tiles...
        var firstRowIndex = []; 
        var farthestRightColumn = []; 
        var rejected = [];
        for (let j = 0; j < jQuery("td").length; j++){
          if (jQuery("td").eq(j).css("background-color") != "rgb(255, 0, 0)"){
            //looking for white tiles.. must be 412
            // j > 21 -> ignore first row
            // j < 440 -> ignore last row 
            // j % 21 != 0 -> ignore first column; 
            if (j % 20 == 0){
              jQuery("td").eq(j).css({"background-color": "transparent"});
              farthestRightColumn.push(j); 
              for (let k = 0; k < jQuery("td").length; k++){
                jQuery("td").eq(k).html("<p></p>"); 
              }
            }

            if (j > 21 && j < 440 && j % 21 != 0){
              jQuery("td").eq(j).css({"background-color": "transparent"});
              allIndexPosition.push(j); 
              for (let k = 20; k <= 419; k += 21){
                jQuery("td").eq(k).html("<p></p>");
              }
            }
            else if (j <= 20){
              jQuery("td").eq(j).css({"background-color": "transparent"}); 
              firstRowIndex.push(j); 
              for (let k = 0; k <= 20; k++){
                jQuery("td").eq(k).html("<p></p>");
              }
            }
          }
        }

        for (let item = 0; item < farthestRightColumn.length; item++){
          var minesFound; 
          var temp = farthestRightColumn[item]; 
          var var1 = temp - 1;
          var var2 = temp + 20;
          var var3 = temp + 21;
          var var4 = temp - 21;
          var var5 = temp - 22;
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            minesFound = 1; 
            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + minesFound + "</p>");
          }  
        }

        for (let inTheList = 0; inTheList < firstRowIndex.length; inTheList++){
          var mines; 
          var temp = firstRowIndex[inTheList]; 
          var var1 = temp + 1; 
          var var2 = temp - 1; 
          var var3 = temp + 20;
          var var4 = temp + 21;
          var var5 = temp + 22;
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
            mines = 1; 
            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
              if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                mines = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                }  
              }
            } 
            else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
              if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                mines = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
              }
            } 
            else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
              if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                mines = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
                else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                } 
              }
            } 
            else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
              if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                mines = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                    mines = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
                  }
                }

                
              }
            } 
            else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              if(jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                mines = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mines + "</p>");
              }
            } 
          }
        }

        for (let index = 0; index < allIndexPosition.length; index++){
          //take the tile as reference. 
          //start from index position 0 
          var temp = allIndexPosition[index];
          var var1 = temp - 1; 
          var var2 = temp + 1; 
          var var3 = temp + 20; 
          var var4 = temp + 21; 
          var var5 = temp + 22; 
          var var6 = temp - 20; 
          var var7 = temp - 21; 
          var var8 = temp - 22; 
          if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
            mineCounter = 1; 
            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center;\">" + mineCounter + "</p>");
            if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //exclude 1 and 2
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 2 and 3
                        if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 2, 4
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                            //ignore 1, 2, 3, 4

                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 2, 5
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 2, 6
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 2, 7
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }               
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 2, 8
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }  
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //exclude 1 and 3
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 3 and 2
                        if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        } 
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 3, 4
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 3, 5
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 3, 6 
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 3, 7
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 3, 8
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }  
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 1 and 4 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 4 and 2 
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 4 and 3
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 4 and 5
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 4 and 6
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 4 and 7
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 4 and 8
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 1 and 5. 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 5 and 2
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 5 and 3 
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 5 and 4 
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 5 and 6
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 5 and 7 
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 5 and 8 
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        //ignore 1, 5 and 8 
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 1 and 6
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 6 and 2 
                        if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 6 and 3 
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 6 and 4
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 6 and 5 
                        if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }
                        else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                          if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                            mineCounter = 5; 
                            jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                          }
                        }





                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 6 and 7 



                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                        //ignore 1, 6 and 8






                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 1 and 7 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 1 and 8 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
              }
            }
            else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 2 and 1. 
                    if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  } 
                }
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 2 and 3 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  } 
                }
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 2 and 4 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  } 
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 2 and 5 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  } 
                }
                else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 2 and 6 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  } 
                }
                else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 2 and 7 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  } 
                }
                else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 2 and 8 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  } 
                }
              }
            }
            else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 3 and 1.... 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 3 and 2 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 3 and 4 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }  
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 3 and 5 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 3 and 6 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 3 and 7 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 3 and 8 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }          
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }   
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }   
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }   
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }  
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }  
                  }
                }
              }
            }
            else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 4 and 1. 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }  
                  }
                }
                else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 4 and 2 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                  }
                }
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 4 and 3 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                  }
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 4 and 5
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }   
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                  }
                }
                else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 4 and 6 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                  }
                }
                else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 4 and 7 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                  }
                }
                else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 4 and 8 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(va7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    } 
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
              }
            }
            else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 1 and 5 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 5 and 2 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 5 and 3 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 5 and 4 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 5 and 6
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 5 and 7
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 5 and 8
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
              }
            }
            else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 6 and 1.. 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 6 and 2
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 6 and 3
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 6 and 4 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 6 and 5 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 6 and 7 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 6 and 8
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
              }
            }
            else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 7 and 1
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 7 and 2
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 7 and 3
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 7 and 4;
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 7 and 5 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 7 and 6 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 7 and 8
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
              }
            }
            else if (jQuery("td").eq(var8).css("background-color") == "rgb(255, 0, 0)"){
              if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                mineCounter = 2; 
                jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 8 and 1 
                    if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 8 and 2 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 8 and 3
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 8 and 4
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 8 and 5
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 8 and 6
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
                else if (jQuery("td").eq(var7).css("background-color") == "rgb(255, 0, 0)"){
                  if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                    mineCounter = 3; 
                    jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                    //ignore 8 and 7 
                    if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                    else if (jQuery("td").eq(var6).css("background-color") == "rgb(255, 0, 0)"){
                      if (jQuery("td").eq(var1).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var2).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var3).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var4).css("background-color") == "rgb(255, 0, 0)" || jQuery("td").eq(var5).css("background-color") == "rgb(255, 0, 0)"){
                        mineCounter = 4; 
                        jQuery("td").eq(temp).html("<p style = \"display: flex; justify-content: center; align-items: center\">" + mineCounter + "</p>");
                      }
                    }
                  }
                }
              }
            }
          }
          else {
            jQuery("td").eq(temp).html(); 
          } 
        }

        //change the color of the numbers accordingly to avoid confusion
        if (jQuery("td").html() == 1){
          jQuery("td").css({"color": "blue"}); 
        }
        jQuery("body").css({"overflow-y": "scroll"}); 
        jQuery("div.BaseBlack").eq(0).css({"display": "none"});
        }
        setTimeout(CreateDelay, 1000);
      });
    });
  }
}); 