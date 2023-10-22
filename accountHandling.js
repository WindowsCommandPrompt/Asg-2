const requests = (async () => { 
  try {
     const {getRequest, postRequest, 
            DeleteRequest, PutRequest, 
     } = await import("./config/ajaxconfig.js") //Destructure functions and variables from this object
     return { 
       __getRequest__: getRequest, 
       __postRequest__: postRequest, 
       __DeleteRequest__: DeleteRequest, 
       __PutRequest__: PutRequest
     } 
  } catch (cause) {
    console.error("File failed to open. See error: " + cause) 
  }
})() 

require("")

 console.log("sdfsdf", requests.__getRequest__)

//dangerous
fetch("https://api.ipify.org/?format=json").then((response) => {
  const blob = response.json(); 
  blob.then((data) => {
    const ip = data["ip"] 
    console.log(ip)
  }); 
});

//query banned ip addresses at the following address: https://banned-7111.restdb.io/rest/banned-addresses  



var something = localStorage.getItem("sessionID").length; 
var getExactUsername = localStorage.getItem("username"); 
if (something > 0){ 
  jQuery("button#LoginRedirect").hide();
  jQuery("nav").after("<p style = \"font-size: 20px\" id = \"ProfileSettings\">Welcome, " + getExactUsername + "</p>");
  jQuery("p#textSize").html(getExactUsername);
}

jQuery("p#ProfileSettings").on("mouseover", function(){
  jQuery(this).css({"cursor": "pointer"}); 
  jQuery("div#UserAccountControls").css({"display": "flex"}); 
}); 

jQuery("div#UserAccountControls").on("mouseleave", function(){
  jQuery(this).css({"display": "none"});
}); 

jQuery("button#logInButtonVerify").on("click", function(){
  //check if the user input matches with the API. 
  var usernameInput = jQuery("input#usernameInputVerify").val(); 
  var passwordInput = jQuery("input#passwordInputVerify").val(); 
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
  jQuery.ajax(request.__getRequest__).done(function(getResponse){
    var targetID; 
    for(let index = 0; index < getResponse.length; index++){
      if (getResponse[index].username == getExactUsername){
        if (getResponse[index].username == usernameInput && getResponse[index].password == passwordInput){
          var targetID = getResponse[index]._id; 
        }
      }
    }
    console.log(targetID);
  }).fail(function() {
    //attempt to query another api of the same set of data
  }); 
}); 

//change the menu in the mobile version of the webpage.

//SIGN OUT LORH
//logout of the user account 
jQuery("div.red").on("click", function(){
  jQuery("body").css({"opacity": 0}); 
  var getTargetSettings = {
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
  jQuery.ajax(request.__getRequest__).done(function(responseFromLoginInformationAPI){
    var targetAccountID; 
    for (let apiIndex = 0; apiIndex < responseFromLoginInformationAPI.length; apiIndex++){
      if (localStorage.getItem("username")  == responseFromLoginInformationAPI[apiIndex].username){
        targetAccountID = responseFromLoginInformationAPI[apiIndex]._id;
      }
    }

    var jsondata = {"accountIsMappedTo": null, "loginStatus": false}; 

    var updateAPISettings = {
      "async": true,
      "crossDomain": true,
      "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${targetAccountID}`,
      "method": "PUT",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }

    jQuery.ajax(updateAPISettings).done(function(){
      localStorage.clear(); 
      window.location.replace("https://MainPage.masterzy1234.repl.co"); 
      function SHOWLAH(){
        jQuery("button#LoginRedirect").show(); 
      } 
      setTimeout(SHOWLAH, 1050);
    }); 
  }); 
}); 

//CHANGE LORH
jQuery("div.blue").on("click", function(){
  jQuery("body").css({"overflow-y": "hidden"});
  jQuery("div#UserAccountControls").css({"display": "none"});
  jQuery("div.positionToFixedDisplayToNone").css({"background-color": "rgb(0, 0, 0, 0)"});
  jQuery("div#editAccount").css({"opacity": 0}); 
  function Appear(){
    jQuery("div.positionToFixedDisplayToNone").css({"display": "flex"});
    jQuery("div#editAccount").css({"display": "flex"}); 
  }
  setTimeout(Appear, 100); 
  function MAKEITAPPEARLAH(){
    jQuery("div.positionToFixedDisplayToNone").css({"background-color": "rgb(0, 0, 0, 0.60)"}); 
    jQuery("div#editAccount").css({"opacity": 1}); 
  }
  setTimeout(MAKEITAPPEARLAH, 1000); 
});

//account watchdog 
//if the user signs out of his account on another tab, all tabs with the same website will be signed out automatically together. 


