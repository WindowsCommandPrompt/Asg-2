jQuery("button#proceed").on("click", function(){
  var seconds = -1;
  var minutes = 0;
  var hours = 0; 
  function IncrementSeconds() {
    seconds = seconds += 1;
    if (seconds < 10){
      if (minutes != 0){
        if (minutes < 10){
          if (hours != 0){
            if (hours < 10){
              jQuery("div#TimerBox").html("0" + hours + ": 0" + minutes + ": 0" + seconds);
            }
            else {
              jQuery("div#TimerBox").html(hours + ": 0" + minutes + ": 0" + seconds); 
            }
          }
          else {
            jQuery("div#TimerBox").html("00: 0" + minutes + ": 0" + seconds); 
          }
        }
        else {
          jQuery("div#TimerBox").html("00: " + minutes + ": 0" + seconds); 
        }
      }
      else {
        jQuery("div#TimerBox").html("00: 00" + ": 0" + seconds)
      }
    }
    else {//more than 10 seconds
      if (minutes != 0){
        if (minutes < 10){
          if (hours != 0){
            if (hours < 10){
              jQuery("div#TimerBox").html("0" + hours + ": 0" + minutes + ": " + seconds); 
            }
            else{
              jQuery("div#TimerBox").html(hours + ": 0" + minutes + ": " + seconds); 
            }
          }
          else {
            jQuery("div#TimerBox").html("00: 0" + minutes + ": " + seconds);
          } 
        }
        else {
          jQuery("div#TimerBox").html("00: " + minutes + ": " + seconds); 
        }
      }
      else {
        jQuery("div#TimerBox").html("00: 00: " + seconds)
      }
      if (minutes >= 10){
        if (hours != 0){
          if (hours < 10){
            jQuery("div#TimerBox").html("0" + hours + ": " + minutes + ": " + seconds); 
          }
          else {
            jQuery("div#TimerBox").html(hours + ": " + minutes + ": " + seconds);
          }
        }
      }
      if (seconds == 60){
        //add one to minute 
        seconds = -1; 
        seconds = seconds += 1;
        minutes += 1
        if (seconds < 10){
          if (minutes < 10){
            if (hours != 0){
              if (hours < 10){
                jQuery("div#TimerBox").html("0" + hours + ": 0" + minutes + ": 0" + seconds); 
              }
              else {
                jQuery("div#TimerBox").html(hours + ": 0" + minutes + ": 0" + seconds); 
              }
            }
            else {
              jQuery("div#TimerBox").html("00: 0" + minutes + ": 0" + seconds);
            }
          }
          else {
            if (minutes == 60){
              //go into hours 
              minutes = 0; 
              hours = hours + 1; 
              if (seconds < 10){
                if (minutes < 10){
                  if (hours != 0){
                    if (hours < 10){
                      jQuery("div#TimerBox").html("0" + hours + ": " + "0" + minutes + ": " + "0" + seconds); 
                    }
                    else {
                      jQuery("div#TimerBox").html(hours + ": " + "0" + minutes + ": 0" + seconds); 
                    }
                  } 
                  else {
                    jQuery("div#TimerBox").html("00: " + "0" + minutes + ": 0" + seconds); 
                  }
                }
                else {
                  jQuery("div#TimerBox").html(hours + ": " + minutes + ": 0" + seconds); 
                }
              }
              else {
                jQuery("div#TimerBox").html(hours + ": " + minutes + ": 0" + seconds);
              }
            }
            else {
              jQuery("div#TimerBox").html("00: " + minutes + ": 0" + seconds);
            }
          } 
        }
        else {
          if (minutes < 10){
            jQuery("div#TimerBox").html("00: 0" + minutes + ": " + seconds);
            if (hours < 10){
              jQuery("div#TimerBox").html("0" + hours + ": 0" + minutes + ": " + seconds); 
            }
            else {
              jQuery("div#TimerBox").html(hours + ": 0" + minutes + ": " + seconds);
            }
          }
          else {
            jQuery("div#TimerBox").html("00: " + minutes + ": " + seconds);
            if (hours < 10){
              jQuery("div#TimerBox").html("0" + hours + ": " + minutes + ": " + seconds);
            }
            else {
              jQuery("div#TimerBox").html(hours + ": " + minutes + ": " + seconds);
            }
          }
        }
      }
    }
  } 
  setInterval(IncrementSeconds, 1000); 
});  



 


