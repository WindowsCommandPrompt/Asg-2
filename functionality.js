//mouseover and mouseleave interactions...
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

//Add another line of code which makes the loginbutton disappear if the user is logged in
var something = localStorage.getItem("username"); 
if (something != null){
  jQuery("div.Switcher").css({"display": "none"});
}

//on leaving the page;
jQuery("div.navElement").eq(0).on("click", function(){
  jQuery("body").css({"opacity": 0});
  function REDIRECTLAH(){
    window.location.href = "https://MainPage.masterzy1234.repl.co";
  }
  setTimeout(REDIRECTLAH, 1000); 
}); 

jQuery("div.navElement").eq(1).on("click", function(){
  jQuery("body").css({"opacity": 0});
  function REDIRECTLAH(){
    window.location.href = "https://MainPage.masterzy1234.repl.co/gamesPage.html";
  }
  setTimeout(REDIRECTLAH, 1000); 
}); 

jQuery("div.navElement").eq(2).on("click", function(){
  function REDIRECTLAH(){
    window.location.href = "https://MainPage.masterzy1234.repl.co/contactPage.html"
  }
  setTimeout(REDIRECTLAH, 1000);
})

jQuery("div#contactMethod1").on("mouseover", function(){
  jQuery(this).css({"width": "200px", "height": "100px", "cursor": "pointer"});
  jQuery("div#container1").css({"width": "100px"});
}); 
jQuery("div#contactMethod1").on("mouseleave", function(){
  jQuery(this).css({"width": "100%", "height": "33.3333333%"});
}); 
jQuery("div#contactMethod2").on("mouseover", function(){
  jQuery(this).css({"width": "200px", "height": "100px", "cursor": "pointer"});
}); 
jQuery("div#contactMethod2").on("mouseleave", function(){
  jQuery(this).css({"width": "100%", "height": "33.33333333%"}); 
}); 
jQuery("div#contactMethod3").on("mouseover", function(){
  jQuery(this).css({"width": "200px", "height": "100px", "cursor": "pointer"});
}); 
jQuery("div#contactMethod3").on("mouseleave", function(){
  jQuery(this).css({"width": "100%", "height": "33.33333333%"}); 
});
jQuery(document).ready(function(){
  jQuery(window).on("scroll", function(){
    var windowPosition = jQuery(this).scrollTop(); 
    var windowHeight = jQuery(this).height(); 
    var documentHeight = jQuery(document).height();
    var scrollPercentage = windowPosition / (documentHeight - windowHeight);
    var rounded = Math.round(scrollPercentage * 100)
    if (rounded > 62){
      jQuery("div#container1").css({"position": "fixed"});     
    }
    else {
      jQuery("div#container1").css({"position": "absolute", "top": 0});
    }
  });
});  

//Redirect to the login page. 
jQuery("button#LoginRedirect").on("click", function(){
  window.location.href = "https://MainPage.masterzy1234.repl.co/LogIn.html";
}); 

//close the menu 
jQuery("i#closeMenu").on("click", function(){
  jQuery("div#contents").css({"width": "0%"});
  jQuery("div#internalText").css({"opacity": 0});
  function HideCompletely(){
    jQuery(this).hide();
    jQuery("div#contents").css({"display": "none"}); 
  }
  setTimeout(HideCompletely, 1050); 
}); 

jQuery("i#closeMenu").on("mouseover", function(){
  jQuery(this).css({"cursor": "pointer"});
}); 

jQuery("i#closeMenu").on("mouseleave", function(){
  jQuery(this).css({"cursor": "default"}); 
}); 

//now open the menu again.
jQuery("i#openMenu").on("mouseover", function(){
  jQuery(this).css({"cursor": "pointer"});
}); 

jQuery("i#openMenu").on("mouseleave", function(){
  jQuery(this).css({"cursor": "default"}); 
}); 

jQuery("i#openMenu").on("click", function(){
  jQuery("div#contents").css({"width": "0%"}); 
  jQuery("div#contents").css({"display": "flex"});
  jQuery("i#closeMenu").show(); 
  let screenWidthChecker = window.matchMedia("(max-width: 700px)");
  var span; 
  if (screenWidthChecker.matches){
    span = "100%"; 
  }
  else{
    span = "40%"; 
  }
  jQuery("div#contents").css({"width": span});
  function Delay(){
    jQuery("div#internalText").css({"opacity": 1});
  }
  setTimeout(Delay, 500);
}); 

window.onresize = function(){
  let screenWidthChecker = window.matchMedia("(max-width: 700px)");
  var span; 
  if (screenWidthChecker.matches){
    span = "100%"; 
  }
  else{
    span = "40%"; 
  }
  jQuery("div#contents").css({"width": span});
}

jQuery("i.go").on("mouseover", function(){
  jQuery(this).css({"color": "orange", "cursor": "pointer", "font-size": "90px", "transition": "font-size 1s"}); 
}); 

jQuery("i.go").on("mouseleave", function(){
  jQuery(this).css({"color": "black", "cursor": "default", "font-size": "70px", "transition": "font-size 1s"}); 
}); 

jQuery("i.go").eq(0).on("click", function(){
  window.open("https://MainPage.masterzy1234.repl.co"); 
}); 

//rewardsPage 
jQuery("i.go").eq(1).on("click", function(){
  window.open("https://MainPage.masterzy1234.repl.co/rewardsPage.html")
}); 

//gamesPage
jQuery("i.go").eq(2).on("click", function(){
  window.open("https://MainPage.masterzy1234.repl.co/gamesPage.html"); 
}); 

//append to table (leaderboard) 
//GET then sort the list. 
var getFromTheLoginInformationAPISettings = {
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

var scoreList = []; 
jQuery.ajax(getFromTheLoginInformationAPISettings).done(function(returnedResponse){
  for(let i = 0; i < returnedResponse.length; i++){
    scoreList.push([returnedResponse[i].username,returnedResponse[i].sGameHighScore + returnedResponse[i].minesweeperHighScore + returnedResponse[i].boardGameHighScore]); 
  }
  //2, 5, 8, 11, 14
  console.log(scoreList);
  /* 
  var point1 = scoreList[0][1]; 
  var point2 = scoreList[1][1]; 
  var point3 = scoreList[2][1]; 
  var point4 = scoreList[3][1];
  var point5 = scoreList[4][1];

  jQuery("td").eq(2).html(point1); 
  jQuery("td").eq(5).html(point2);
  jQuery("td").eq(8).html(point3);
  jQuery("td").eq(11).html(point4); 
  jQuery("td").eq(14).html(point5);  
  */  
}); 
