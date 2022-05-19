**Last updated: 19 February 2022 10:49AM** 
<br>
<br>

<blockquote>Reported major API outage @ 18 Feb 2022 1:50AM <b> Cannot sign in/out, like/dislike, buy items</b> API unstable. If API fails, please wait patiently for the code to work, rest assured that the code actually 100% works. </blockquote>

 

## TABLE OF CONTENTS 
<ul> 
  <li> Project Name </li> 
  <li> Design rationale </li> 
  <li> Functions (How to use this website) </li> 
  <li> List of bugs fixed + how does this bug impact normal functionality of the website as a whole </li> 
  <li> Technology used </li> 
  <li> Testing </li> 
  <li> List of javascript codes that you may want to categorise them as good...? </li> 
  <li> Acknowledgements </li> 
</ul> 

<br>
<hr> 
<br>

## Project Name 

**Name: ** TheUltimateGamingWebsite  
(sounds weird but yea)

<br> 
<hr> 
<br> 

## Design Rationale

<p align = "justify">Most games nowadays that we see require you to pay money to pay. In this game, no money was involved. All you have to do is to invest some time into this website to earn something that is commonly referred to as 'points'. You can use these 'points' to make life easier for you in order for you to earn more points. Make life easier by purchasing power ups, only hints for now to speed up the gaming process.</p> 
<br>
<br>
<br>
<p align = "justify">
  Tried to create two different types of games. One game is the sudoku whereas the other game is the minesweeper. Our focus is to make sure that both games have been re-engineered in such a way that it will attract more players to come and play it in the long run. 
</p> 
<br> 
<p align = "justify"> 
  The purpose of the board game is to teach people how to make wise decisions in life. Think before doing anything. The board game consists of various traps that the player may fall into with the introduction of the all new "Mystery tiles" <b>(refer to image below)</b> 
</p>
<br> 
<p align = "center"> 
  <img src = "https://static.wixstatic.com/media/3e6e93_0264d9da423e4225a561c0873345769f~mv2.png" width = "300px">
  <br> 
  <small><b>An example of a mystery tile</b></small> 
</p> 
<br> 
<p align = "justify">
  Another game that I have created would be the minesweeper game. The minesweeper game consists of a 420-square board. That has mines buried in each square. There are no levels of difficulty in this game. Players have only one level for now to play with. 
</p>  
<br> 
<p align = "justify">The other games that we have created so far would be the "Sudoku" game and the "Minesweeper" game. I'm pretty sure that most of us here are familiar with the rules to play the minesweeper game. </p> 
<br> 
<hr> 
<br> 

## Technologies used

<ul> 
  <li id = "IncreaseSize"> jQuery </li>
    <ol> 
      <li> <b> In terms of syntax, </b> </li> 
        <ol> 
          <li align = "justify"> jQuery syntax can be easily understood within a shorter period of time, through high code readability. DOM Manipulation would be easier with the help of jQuery, such as introducing new DOM elements, with the help of in-built jQuery functions such as <code>before()</code>, <code>after()</code>, and updating existing DOM elements such as <code>append()</code>, <code>html()</code>, <code>text()</code>, and changing CSS directly in a single JavaScript file without have to toggle between a CSS file and a JS file. I can just simply use <code>css()</code> to update css when needed, etc. DOM Navigation has also been made easier with the help of jQuery. In-built methods would include <code>children()</code>, <code>parent()</code>, <code>previous()</code>, and <code>next()</code>. Developers like me would be able to get more out of JavaScript through writing less code with the help of jQuery Even though, the code that you have written in jQuery would later be coverted in JavaScript, which results in a longer compiling time.</li> 
          <br>
          <br> 
          <li align = "justify"> In traditional JavaScript, to send to and receive data from a server VIA a server request, we will have to use <code>XMLHttpRequest</code>, which may seem more complicated as compared to <code>jQuery.ajax()</code> in jQuery. Making ajax calls is just so much easier as compared to <code>XMLHttpRequest</code>.</li> 
          <br>
          <br> 
          <li align = "justify"> <code>jQuery(document).ready(function(){ }); </code> makes it easier for me to insert a loading animation while the website is still loading.</li> 
        </ol>
      <br>  
      <li align = "justify"> <b> You will learn traditional JavaScript faster through jQuery.</b> </li>
        <ol>
          <li align = "justify"> Previously it took me a while to understand certain things like <code>addEventListener</code> in JavaScript. With the help of jQuery, I get to know how event listeners work javascript through the following syntax: <code>jQuery([element]#/.[id/class name].on([action], function(){ });</code>, i get to know that, if an action is performed on the target DOM element, it could be said that  </li> 
        </ol>  
    </ol>
  <br>  
  <li> CSS Keyframes </li> 
    <ol> 
      <li align = "justify"> <b> 100% dependance on someone else's animation is not fun at all</b> </li> 
      <ol> 
        <li align = "justify"> I have decided not to use Lottie Files for every single part of my website which require animations. Instead I have decided to recreate my very own loading animation using CSS Keyframes</li>
      </ol>
      <br> 
      <li align = "text"><b> I just wanted to challenge myself. </b></li> 
      <ol> 
        <li align = "justify">CSS Keyframes literally allows me to code animations from scratch without using any advanced software. The only software that I was using was just an Integrated Development Environment <strong>IDE</strong> specially created for programming</li> 
        <br> 
        <br> 
        <li align = "justify">I am a person who really like to code graphics, their interaction and its layout, to make it look visually appealing, and at the same time serves a significant amount of purpose.</li> 
      </ol>  
    </ol> 
  <br> 
  <li> Restdb.io </li> 
    <ol> 
      <li align = "justify"><b>Website content management and synchronisation</b></li> 
      <ol> 
        <li align = "justify">Since the board game that I will be creating for my website is a multiplayer game, this would therefore mean that there is a need for matchmaking. But the question here is, how does matchmaking take place, since we will need to pull another player to the current game room over the internet, therefore we need APIs to do it.</li> 
        <br> 
        <br> 
        <li align = "justify">Displaying of global leaderboards in the main page of the website.</li> 
      </ol> 
    </ol> 
  <br> 
  <li> Lottie files </li> 
    <ol> 
      <li align = "justify"><b>Can be easily inserted into HTML with the help of automatically generated URL(s)</b></li>  
      <ol> 
        <li align = "justify"> Provides short animations that takes up less storage space on my device. Prove to take up less storage space as compared to SVG(s) and GIF(s) </li> 
        <br> 
        <br> 
        <li align = "justify"> I need Lottie files when it comes to loading animations. Saves time as compared to doing animations from scratch using CSS keyframes and SVG.</li> 
      </ol> 
    </ol>
  <br>  
  <br>
  <li> Adobe XD </li> 
    <ol> 
      <li align = "justify"><b>Used for initial development of the webpage</b></li> 
      <ol> 
        <li align = "justify"> Used for creating the wireframes for the website. Important because I still have to ensure that the webpage looks well organised, through proper web semantics, and usage of appropriate html tags and css styling. </li> 
        <br>
        <br>  
        <li align = "justify"> In order to ensure that my webpages are fully responsive with changing screen widths, and changing heights. </li> 
        <br>
        <br>  
        <li align = "justify">Most importantly have a referecing blueprint, that I could look at while developing, and not code blindly</li> 
        <br> 
        <br> 
      </ol> 
    </ol> 
  <br> 
  <br> 
  <li> Adobe Illustrator </li> 
    <ol> 
      <li align = "justify"><b>To create custom images for use on my webpage, for example website logos, etc.</b></li> 
      <ol>
        <li align = "justify">Tried to stay away from using online stock images as I feel that this does not show that I am a good developer. Hence why not take this good opportunity to come up with something that nobody has come up with before. </li> 
      </ol> 
    </ol> 
  <br>
  <br>
  <li>Google fonts</li> 
    <ol>
      <li align = "justify"><b>Don't you think the webpage looks more 'terrifying' with the Times New Roman font?</b></li>
      <ol>
        <li align = "justify">Applied the 'Varela Round' font to ensure that this website looks less 'threatening'. And at the same time, it makes the websites looks more modern and refined. </li> 
      </ol>  
      <li align = "justify"><b></b></li>
    </ol> 
  <br> 
  <br> 
  <li>Google icons</li>
    <ol> 
      <li align = "justify"><b>It's kind of "hard" to create these icons using CSS?</b></li> 
      <ol> 
        <li align = "justify">Plus using google icons is much more simpler than using CSS, just </li> 
      </ol> 
    </ol> 
</ul> 

<br> 
<hr> 
<br> 

## Testing 

<p align = "justify">
  While the developer is 100% responsible for ensuring that this website functions as intended, the developer would like to request any future users of this website to do the following testing and report any bugs to the developer via the in-game contact form. 
</p> 
<br> 
<ol> 
  <li align = "justify">Please help to check if the contact form actually gives an alert box which tells the user whether is he/she 100% sure that he/she would like to submit his/her responses</li>
  <br> 
  <li align = "justify">Please help me check whether you can log into 2 dummy accounts with the same password. The usernames of the two dummy accounts are <code>ok</code> and <code>admin3</code>. The password for these 2 accounts would be <code>helloabcd</code>. Please enter the following URL into your browser search bar:  
  <br>
  <br>
  <b><code>https://MainPage.masterzy1234.repl.co/LogIn.html</code></b>
  <br>
  <br>
  <b>OR</b> 
  <br>
  <br>
  click on this click below: 
  <br>
  <br>
  <a href = "https://MainPage.masterzy1234.repl.co/LogIn.html">CLICK MEEEEEEE</a> 
  <br>
  <br>
  <li align = "justify">Please help me check that you can only like and dislike if you are logged into the website. How to tell if you are logged in? Well, for that case, the 'Log In' button should no longer be seen by anyone if you are logged in. If you click on the thumbs up and down icon, as show in the following image, the following window should pop up, prompting you to log into the website first before you can start liking the game content, and showing your support for the game content creators. Once you are logged in, you can now</li> 
  <br>
  <br>
  <li align = "justify">Do not attempt to run any of the pages that I have created in this repository in other browsers other than Chrome(includes Android version) & Microsoft Edge, this is because some of the word transitions would no longer be visible when you attempt to view the same page on browsers that were not mentioned here. Display of the fonts on your viewport would be extremely weird.</li>
  <br>
  <br>
  <li align = "justify">Please go to the following URL -> <code>https://MainPage.masterzy1234.repl.co/gamesPage.html</code> and check if you can like / dislike the game. It has been programmed in such a way that each user are only allowed to like or dislike the game once. However, you have the ability of removing the like or dislike from the game, if you change your mind. <b> You will need to be logged into the website in order to use this feature. (A pop-up message will appear indicating that you will need to be signed into the website in order to use the like and dislike features). </b> Once you have like or dislike the game. Refresh the page, and see if you can still remove the like or dislike from the game. You can see the green thumbs up for liked games and red thumbs down for disliked games even after you refresh the page.</li>
  <br> 
  <br> 
  <li align = "justify">Please help to check that the spinning wheel actually stops on its own after a set period of time. Please do take note what is the score that is displayed in the message. For example, if the black coloured triangle. For example, if the black coloured triangle is pointing at the 20 points, you should only be awarded with 20 points. </li>
  <br>
  <br>  
  <li align = "justify">minesweeperFunctionality.js is an extremely heavy javascript file that can be thought of as the main brainpower to the minesweeper. Modifying any part of the code could result in the website suffering from chronic brain damage and will never function again! Please check if the code works in your broswer. Please feedback to the development team if you encounter any serious lags. </li> 
  <br>
  <br> 
  <li align = "justify">Please ensure that you have successfully </li> 
  <br> 
  <br> 
  <li align = "justify"></li>
  <br>
  <br>
</ol>

#### Some interesting bugs found would include: 
<ol>
  <li align = "justify">User not being able to sign out of his or her account after clicking on the Log out button. This problem has been fixed successfully with the v.2.0.56 update. </li> 
  <br>
  <br>
  <li align = "justify">Correct password. Correct username. But the login system just won't accept it as a valid username or password. Sounds ridiculous and weird, but this problem has been successfully rectified in the v.2.0.43 update.</li>
  <br> 
  <br>
  <li align = "justify">Due to slow processing speeds, and the tendency of each user clicking on the like and dislike button more than once, this bug has been successfully fixed in v.2.0.64</li> 
  <br> 
  <br>  
  <li align= "justify">Tested with old computers that came with CPUs manufactured before the year 2017. Frequent lags were seen. Please do not attempt to run any of my code on computers manufactured before 2017. Browser crashes, animations not working as expected, may occur. The developer of this website shall not be held liable for any damage caused to your device, hardware and / or software. </li>
  <br>
  <br>
  <li align = "justify">Opening the same website in multiple tabs? Don't worry. The data synchronisation bug has been successfully fixed with effect from 17th February 2022, v.2.0.781. You do not have to refresh the page ever single time you have made a purchase on another page. </li>
  <br> 
  <br> 
  <li align = "justify">Try and see if you can purchase items in the minesweeper game. You should be able to select how many hints you would like to purchase from the store in one single go.</li> 
  <br>
  <br>
  <li align = "justify">Flexboxes can be freaking weird at times..Its already been declared row but it keep giving column. Very annoying. </li>
</ol> 

<br>
<hr>
<br> 

## Acknowledgements 

<p align = "justify">
  The developer of this website would like to thank the following publisher(s), developer(s), for providing the following code, library, for making this development possible.
</p>


<li> normalise.css </li> 
<li> jQuery library </li>
<li> <a href = "https://lottiefiles.com/9844-loading-40-paperplane">Loading 40 | Paper aeroplane</a> </li> 
<li> <a href = "https://lottiefiles.com/72785-searching">Searching</a> </li> 
