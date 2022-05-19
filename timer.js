/* 
var n = [1, 1, 2, 2 ,3 ,4]; 
var n1 = new Set(); 
for (let i = 0; i < n.length; i++){
  n1.add(n[i]); 
}
n1.forEach(function(result){
  console.log(result);
}); 
*/ 
/* 
var q = document.getElementsByTagName("button")[0]
var newArr = new Array(); 
q.addEventListener("click", function(){
  var randomNumber = Math.round(Math.random(), 0); 
  if (newArr.length == 0){
    newArr.push(randomNumber); 
  }
  else if (newArr.length == 1){
    newArr.pop(newArr[0]);
    newArr.push(randomNumber); 
  }
  console.log(newArr);
}); 
*/ 

//window.location.href = "https://newGame.masterzy1234.repl.co/newDirectory/sdf.html"

/* 
const fs = require("fs"); 
const folderName = "/NewFolder/"

fs.mkdir(folderName);
*/ 
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



 


