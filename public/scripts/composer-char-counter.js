$(document).ready(function() {
  // --- our code goes here ---
  const textArea = $('#tweet-text');
  const counter = $('.counter');
  //Using keyUp as key up is before the computer runs the calculation
  textArea.on('keyup', function() {
    //There is a more direct approach, $('.counter') directly. But its bad practice
    //Will go up to its siblings, and grab the value of the child counter. it will then change it according to the length of characters in the text box.
    textArea.siblings('div').children('.counter').val(140 - (this.value.length))

  });

});