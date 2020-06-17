$(document).ready(function() {
  const tweetArea = $('.old-tweet');
  //Using keyUp as key up is before the computer runs the calculation
  tweetArea.on('mouseover', function() {
    //There is a more direct approach, $('.counter') directly. But its bad practice
    //Will go up to its siblings, and grab the value of the child counter. it will then change it according to the length of characters in the text box.
    tweetArea.css('box-shadow', '5px 10px');
  });

});