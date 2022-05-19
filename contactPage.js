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

jQuery("button#LoginRedirect").on("click", function(){
  window.location.href = "https://MainPage.masterzy1234.repl.co/LogIn.html";
}); 

//the person can only view his or her inventory when he is logged into the game system. 
