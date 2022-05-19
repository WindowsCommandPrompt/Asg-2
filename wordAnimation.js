//welcome message alternating 
var wordList = ["player", "you from the future", "new opportunities"];
//increment index by 1.
var initialiser = -1;  
function GetIndexFromWordList(){
  initialiser = initialiser += 1; 
  if (initialiser == 3){
    initialiser = 0;
  }
  return initialiser
}
setInterval(GetIndexFromWordList, 2000);  
//add the new word in place of span...  
function AppendWord(){
  jQuery("span#newText").html(wordList[GetIndexFromWordList()]); 
  jQuery("span#newText").css({"opacity": 1});
} 
setInterval(AppendWord, 2000);
//remove existing word and change into new word.. 
function RemoveWord(){
  jQuery("span#newText").css({"opacity": 0});
  jQuery("span#newText").html(wordList[GetIndexFromWordList()]);
}
setInterval(RemoveWord, 4000);
