//if easy mode, out of 81 squares append number to 40 squares.
jQuery("button#proceed").on("click", function(){
  jQuery("div#TranslucentBlackColorBase").css({"opacity": 0}); 
  function Hide(){
    jQuery("div#TranslucentBlackColorBase").hide(); 
  }
  jQuery("body").css({"overflow-y": "scroll"}); 
  var decision = jQuery("select").val();
  var arr = []; 
  var arrNumList = []; 
  if (decision == "Easy"){
    do{
      var num = Math.round((Math.random() * 81), 0); 
      num == 81 ? arr.push(num - 1) : arr.push(num); 
    }
    while (arr.length < 40);
    for (let j = 0; j < arr.length; j++){
      //append now
      var num1 = Math.round((Math.random() * 9), 0); 
      if (num1 != 0){
        jQuery("div.individualCell").eq(arr[j]).html(num1).css({"color": "red"});
        //close the base... 
        setTimeout(Hide, 1050); 
      }
    }
    //check for duplicate numbers within inner square, row and column; 
    var element = jQuery("div.individualCell"); 
    for (let i = 0; i < element.length; i++){
      if (element.eq(i).html().length != 0){
        //the first row.... 
        if (i % 9 == 0){
          if (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html()){
            //keep appending a value UNTIL there is no duplicate. 
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            } 
            while (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html());
          }
        }
        else if (i % 9 == 1){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html());  
          }
        }
        else if (i % 9 == 2){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()); 
          }
        }
        //second row
        else if (i % 9 == 3){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()); 
          }

        }
        else if (i % 9 == 4){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()); 
          }

        }
        else if (i % 9 == 5){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()); 
          }
        }
        //third row
        else if (i % 9 == 6){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()); 
          }

        }
        else if (i % 9 == 7){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 8){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()); 
          } 
        }
      }
    }
    //end for(above for loop only ensures that every single digit is unique in each box)
    //run through again
    var tempList1 = []; 
    var tempList2 = []; 
    var tempList3 = []; 
    for (let j = 0; j < element.length; j++){
      if (j % 9 == 0 || j % 9 == 1 || j % 9 == 2){
        if (element.eq(j).html().length != 0){
          //append to list and start the 
          tempList1.push(element.eq(j).html()); 
        } 
      }
      else if (j % 9 == 3 || j % 9 == 4 || j % 9 == 5){
        if (element.eq(j).html().length != 0){
          tempList2.push(element.eq(j).html()); 
        }
      }
      else if (j % 9 == 6 || j % 9 == 7 || j % 9 == 8){
        if (element.eq(j).html().length != 0){
          tempList3.push(element.eq(j).html()); 
        }
      }
    }
    console.log(tempList1.length); 
    console.log(tempList2.length);
    console.log(tempList3.length); 
    //run a for loop through each of the individual lists. 
    for (let index1 = 0 ; index1 < tempList1.length; index1++){
      if (j == 0){
        do {
          var num1 = Math.round((Math.random() * 9), 0);
          if (num1 != 0){
            element.eq(j).html(num1);
          } 
        }
        while (element.eq(j + 1).html() == element.eq(j).html() || element.eq(j + 2).html() == element.eq(j).html() || element.eq(j + 3).html() == element.eq(j).html() || element.eq(j + 4).html() == element.eq(j).html() || element.eq(j + 5).html() == element.eq(j).html() || element.eq(j + 6).html() == element.eq(j).html() || element.eq(j + 7).html() == element.eq(j).html() || element.eq(j + 8).html() == element.eq(j).html());
      }
      else if (j == 1){
        do {
          var num1 = Math.round((Math.random() * 9), 0);
          if (num1 != 0){
            element.eq(j).html(num1);
          } 
        }
        while (element.eq(j + 1).html() == element.eq(j).html() || element.eq(j + 2).html() == element.eq(j).html() || element.eq(j + 3).html() == element.eq(j).html() || element.eq(j + 4).html() == element.eq(j).html() || element.eq(j + 5).html() == element.eq(j).html() || element.eq(j + 6).html() == element.eq(j).html() || element.eq(j + 7).html() == element.eq(j).html() || element.eq(j - 1).html() == element.eq(j).html());
      }
    } 
  } 
  else if (decision == "Normal"){
    do{
      var num = Math.round((Math.random() * 81), 0);
      num == 81 ? arr.push(num - 1) : arr.push(num);  
    }
    while (arr.length < 20)
    for (let j = 0; j < arr.length; j++){
      //append now
      var num1 = Math.round((Math.random() * 9), 0); 
      if (num1 != 0){
        jQuery("div.individualCell").eq(arr[j]).html(num1).css({"color": "red"});
        //close the base... 
        setTimeout(Hide, 1050); 
      }
    }
    //end first for
    //check for duplicate numbers within inner square, row and column; 
    var element = jQuery("div.individualCell"); 
    for (let i = 0; i < element.length; i++){
      if (element.eq(i).html().length != 0){
        //the first row.... 
        if (i % 9 == 0){
          if (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html()){
            //keep appending a value UNTIL there is no duplicate. 
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            } 
            while (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 1){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html());  
          }
        }
        else if (i % 9 == 2){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()); 
          }
        }
        //second row
        else if (i % 9 == 3){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 4){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 5){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()); 
          }
        }
        //third row
        else if (i % 9 == 6){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 7){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 8){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()); 
          }
        }
      }
    }
    //end for
  }
  else if (decision == "Hard"){
    do{
      var num = Math.round((Math.random() * 81), 0);
      num == 81 ? arr.push(num - 1) : arr.push(num); 
    }
    while (arr.length < 10)
    for (let j = 0; j < arr.length; j++){
      //append now
      var num1 = Math.round((Math.random() * 9), 0); 
      if (num1 != 0){
        jQuery("div.individualCell").eq(arr[j]).html(num1).css({"color": "red"});
        //close the base... 
        setTimeout(Hide, 1050); 
      }
    }
    //check for duplicate numbers within inner square, row and column; 
    var element = jQuery("div.individualCell"); 
    for (let i = 0; i < element.length; i++){
      if (element.eq(i).html().length != 0){
        //the first row.... 
        if (i % 9 == 0){
          if (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html()){
            //keep appending a value UNTIL there is no duplicate. 
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            } 
            while (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 1){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html());  
          }
        }
        else if (i % 9 == 2){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()); 
          }
        }
        //second row
        else if (i % 9 == 3){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 4){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 5){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()); 
          }
        }
        //third row
        else if (i % 9 == 6){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 7){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 8){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()); 
          }
        }
      }
    }
    //end for
  }
  else if (decision == "Extreme"){
    do{
      var num = Math.round((Math.random() * 81), 0);
      num == 81 ? arr.push(num - 1) : arr.push(num); 
    }
    while (arr.length < 5)
    for (let j = 0; j < arr.length; j++){
      //append now
      var num1 = Math.round((Math.random() * 9), 0); 
      if (num1 != 0){
        jQuery("div.individualCell").eq(arr[j]).html(num1).css({"color": "red"});
        //close the base... 
        setTimeout(Hide, 1050); 
      }
    }
    //check for duplicate numbers within inner square, row and column; 
    var element = jQuery("div.individualCell"); 
    for (let i = 0; i < element.length; i++){
      if (element.eq(i).html().length != 0){
        //the first row.... 
        if (i % 9 == 0){
          if (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html()){
            //keep appending a value UNTIL there is no duplicate. 
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            } 
            while (element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html() || element.eq(i + 8).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 1){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html() || element.eq(i + 7).html() == element.eq(i).html());  
          }
        }
        else if (i % 9 == 2){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html() || element.eq(i + 6).html() == element.eq(i).html()); 
          }
        }
        //second row
        else if (i % 9 == 3){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html() || element.eq(i + 5).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 4){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html() || element.eq(i + 4).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 5){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html() || element.eq(i + 3).html() == element.eq(i).html()); 
          }
        }
        //third row
        else if (i % 9 == 6){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html() || element.eq(i + 2).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 7){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i + 1).html() == element.eq(i).html()); 
          }
        }
        else if (i % 9 == 8){
          if (element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()){
            do {
              var num = Math.round((Math.random() * 9), 0)
              if (num != 0){
                element.eq(i).html(num).css({"color": "red"}); 
              }
            }
            while(element.eq(i - 1).html() == element.eq(i).html() || element.eq(i - 2).html() == element.eq(i).html() || element.eq(i - 3).html() == element.eq(i).html() || element.eq(i - 4).html() == element.eq(i).html() || element.eq(i - 5).html() == element.eq(i).html() || element.eq(i - 6).html() == element.eq(i).html() || element.eq(i - 7).html() == element.eq(i).html() || element.eq(i - 8).html() == element.eq(i).html()); 
          }
        }
      }
    }
    //end for
  }
  //must undergo compulsory check for both duplicates in horizontal and vertical.
  var temp1 = [];
  var temp2 = []; 
  var temp3 = []; 
  for (let position = 0; position < jQuery("div.individualCell").length; position++){
    //first row
    //0, 3, and 6 form up one column
    //1, 4, and 7 form up second column 
    //2, 5, and 8 form up third column 
    a = jQuery("div.individualCell"); 
    if (jQuery("div.individualCell").eq(position).html().length != 0){
      if (position % 9 == 0 || position % 9 == 1 || position % 9 == 2){
        temp1.push(a.eq(position).html());
      }
      //second row
      else if (position % 9 == 3 || position % 9 == 4 || position % 9 == 5){
        temp2.push(a.eq(position).html());
      }
      //third row
      else if (position % 9 == 6 || position % 9 == 7 || position % 9 == 8){
        temp3.push(a.eq(position).html());
      }
    } 
  }
  console.log(temp1);
}); 

