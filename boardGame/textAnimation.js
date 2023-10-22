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

//WiFi bar animation include in this setInterval function
setInterval(() => {
  let a = parseInt(jQuery("span#time").text()); 
  jQuery("span#time").text(`${a - 1}`); 
  if (jQuery("span#time").text() == "0"){
    jQuery("span#time").text("10"); 
  }
  //Change the background color accordingly 
  if (jQuery("path#internetBar1").attr("fill") == "transparent" && 
      jQuery("path#internetBar2").attr("fill") == "transparent" && 
      jQuery("path#internetBar3").attr("fill") == "transparent") {
    jQuery("path#internetBar0").attr("fill", "red"); 
  }
  if (jQuery("path#internetBar0").attr("fill") == "red" && 
      jQuery("path#internetBar1").attr("fill") == "transparent" && 
      jQuery("path#internetBar2").attr("fill") == "transparent" && 
      jQuery("path#internetBar3").attr("fill") == "transparent") {
    jQuery("path#internetBar0").attr("fill", "orange"); 
    jQuery("path#internetBar1").attr("fill", "orange"); 
  }
}, 1000); 
