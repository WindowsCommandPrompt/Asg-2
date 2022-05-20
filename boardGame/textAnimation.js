function Repeat () {
  function Dot1() {
    jQuery("p#text").append("<strong>.</strong>"); 
  }
  setTimeout(Dot1, 500); 
  function Dot2(){
    jQuery("p#text").append("<strong>.</strong>"); 
  }
  setTimeout(Dot2, 1000); 
  function Dot3(){
    jQuery("p#text").append("<strong>.</strong>"); 
  }
  setTimeout(Dot3, 1500);
  jQuery("p#text").html("LOADING"); 
} 
setInterval(Repeat, 2000);