function DisplayWindowWidth () {
  jQuery("h2#viewportWidthIndicator").text("Your current viewport width is: " + jQuery(window).width() + "px"); 
  jQuery("h2#viewportHeightIndicator").text("Your current viewport height is: " + jQuery(window).height() + "px"); 
}
window.onresize = DisplayWindowWidth; 
