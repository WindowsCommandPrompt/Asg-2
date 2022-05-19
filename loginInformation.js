//page appear animation 
jQuery(document).ready(function(){ 
  jQuery("body").css({"opacity": 0, "display": "none"}); 
  function DisplayToBlock(){
    jQuery("body").css({"display": "flex"}); 
  }
  setTimeout(DisplayToBlock, 300);
  function Show(){ 
    jQuery("body").css({"opacity": 1}); 
  } 
  setTimeout(Show, 1050);
});

jQuery("i#color").on("mouseover", function(){
  jQuery(this).after("<div style = \"position: absolute; width: 20%; height: 20px; font-size: 15px; background-color: gray; color: white; border-radius: 5px; z-index: 1; top: 146px\" id = \"information\">Exits this page and return to the main page</div>"); 
}); 

jQuery("i#color").on("mouseleave", function(){
  jQuery("div#information").css({"display": "none"}); 
}); 

jQuery("i#color").on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  function REDIRECTBACKLAH(){
    window.location.href = "https://mainPage.masterzy1234.repl.co"
  } 
  setTimeout(REDIRECTBACKLAH, 1050); 
}); 

jQuery("i#help").on("mouseover", function(){
  jQuery(this).after("<div style = \"position: absolute; height: 20px; font-size: 15px; background-color: gray; color: white; border-radius: 5px; z-index: 1\" id = \"informationHelp\">Help</div>"); 
}); 

jQuery("i#help").on("mouseleave", function(){
  jQuery("div#informationHelp").css({"display": "none"}); 
});

jQuery("i#settings").on("mouseover", function(){
  jQuery(this).after("<div style = \"position: absolute; height: 20px; font-size: 15px; background-color: gray; color: white; border-radius: 5px; z-index: 1; right: 10px;\" id = \"informationSettings\">Settings</div>"); 
}); 

jQuery("i#settings").on("mouseleave", function(){
  jQuery("div#informationSettings").css({"display": "none"});
}); 
//redirect to help page.
//open tab on a new page. 
jQuery("i#help").on("click", function(){
  window.open("https://mainpage.masterzy1234.repl.co/Help/help.html"); 
}); 
//if create account, post the new username to API
var symbolArray1 = String.fromCharCode(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47);
var symbolArray2 = String.fromCharCode(58, 59, 60, 61, 62, 63, 64);
var symbolArray3 = String.fromCharCode(91, 92, 93, 94, 95, 96);
var symbolArray4 = String.fromCharCode(123, 124, 125, 126);
jQuery("button#CreateNewAccount").on("click", function(){
  jQuery("div.formCluster").eq(0).css({"opacity": 0}); 
  //we don't need the button anymore. 
  jQuery(this).hide();
  jQuery("div.loginCard").html("<i class = \"material-icons\" style = \"font-size: 50px; position: relative\" id = \"back\">arrow_back</i><br><br><h2>Welcome, new user, let's get you registered!</h2><div class = \"formCluster\" style = \"opacity: 0; transition: opacity 1s; display: flex; flex-direction: column\"><div class = \"loginField\"><label>Username: </label><input type = \"text\" placeholder = \"New Username\" id = \"username\"></div><div class = \"loginField\"><label>Password:</label><input type = \"text\" placeholder = \"New Password\" id = \"password\"></div><br><br><button type = \"submit\" id = \"registerButtonAccount\">Register</button></div>");
  //if the user misclicked on the button and would like to return to the previous page... 
  jQuery("i#back").on("click", function(){
    if (jQuery("input#username").val().length == 0 && jQuery("input#password").val().length == 0){
      jQuery("body").css({"opacity": 0}); 
      function Redirect(){
        window.location.href = "https://mainpage.masterzy1234.repl.co/LogIn.html";
      } 
      setTimeout(Redirect, 1050); 
    }
    else {
      var confirmation = confirm("You have unsaved changes. If you choose to be redirected, all your information will be lost. Are you sure you want to continue?"); 
      if (confirmation == true){ 
        jQuery("body").css({"opacity": 0}); 
        function REDIRECTLEH(){
          window.location.href = "https://mainpage.masterzy1234.repl.co/LogIn.html";
        } 
        setTimeout(REDIRECTLEH, 1050); 
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

            //default value (number) to 0, and (boolean) to false, (string) to null
            var jsondata = {
              "username": temp, 
              "password": temp1, 
              "accountCreationDate": currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + (currentDate.getDate() + 1), 
              "accountCreationTime": currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(), "loginStatus": false,
              "pointsPossessed":0,
              "sGameHighScore":0,
              "minesweeperHighScore":0,
              "boardGameHighScore":0, 
              "accountIsMappedTo": null, 
              "gamesLiked":
              [
                {"gameName":"Minesweeper","Disliked":false,"Liked":false},
                {"gameName":"Sudoku","Disliked":false,"Liked":false}
              ], 
              "noOfHintsSudoku":0,
              "noOfHintsMinesweeper":0,
              "chanceToSpinWheel":true,
              "dateOfLastSpin":null,
              "timeOfLastSpin":null
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

jQuery("button#redirect").on("click", function(){
  window.location.href = "https://MainPage.masterzy1234.repl.co"
}); 

//if login, get username from API and compare password
jQuery("div.formCluster").after("<div id = \"errorMsg\"></div>");
jQuery("div#errorMsg").css({"width": "100%", "background-color": "red", "border-radius": "5px",   "color": "white", "height": "50px", "display": "flex", "justify-content": "center", "align-items": "center"}); 
jQuery("div#errorMsg").hide(); 


//for returning users
jQuery("button#logInButton").on("click", function(){
  if(jQuery("input#passwordInput").val().length == 0 || jQuery("input#usernameInput").val().length == 0){
    if (jQuery("input#usernameInput").val().length == 0){
      //append message "Please enter a username"
      jQuery("div#errorMsg").show(); 
      jQuery("div#errorMsg").html("Please enter a username"); 
    }
    else if (jQuery("input#passwordInput").val().length == 0){
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
        jQuery("body").css({"justify-content": "center"});
        jQuery("body").html('Authentication successful<br><br><lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ObshHL.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>'); 
        //SESSION ID MAPPING TO USERNAME PROCEDURE???
        //aka (SIMTUP)
        //as soon as the page loads, generate the sessionID.... 
        //jQuery(document).ready(function()
        var return1 = Math.floor((Math.random() * 4294967295), 0); 
        var return2 = Math.floor((Math.random() * 4294967295), 0); 
        var concat = return1 ^ return2; 
        //concat variable is the end of this javascript program.... 
        var currentDate = new Date(); 
        var timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() ; 
        var dateNow = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate(); 
        //contains playerID information...
        //the variable concat contains sessionID information. Used to remember the user UNLESS THE USER SIGN OUT LOL 
        var jsondata = {
          "PlayerID": concat, 
          "PlayerIDCreationTime": timeNow,
          "PlayerIDCreationDate": dateNow, 
        }

        concat = return1 ^ return2; 
        localStorage.setItem("sessionID", concat); 
        localStorage.setItem("username", inputUsername); 

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
          //run the put method...
          var jsondata = {"accountIsMappedTo": concat, "loginStatus": true};
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
              window.location.replace("https://MainPage.masterzy1234.repl.co");
            }
            setTimeout(REDIRECTLAH, 2050); 
          }); 
        });
      }
    }); 
  } 
}); 

//if delete account, please prompt the user to input the username of his or her account and password. Upon successful validation, the system will automatically proceed and delete the account from the API. 