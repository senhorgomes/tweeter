$(document).ready(function() {
  // --- our code goes here ---
  const textArea = $('#tweet-text');
  //Using keyUp as key up is before the computer runs the calculation
  textArea.on('keyup', function() {
    //There is a more direct approach, $('.counter') directly. But its bad practice
    //Will go up to its siblings, and grab the value of the child counter. it will then change it according to the length of characters in the text box.
    textArea.siblings('div').children('.counter').val(140 - (this.value.length))
    //Conditional to change to change text color if the character count goes above 140
    //Had an issue where it would go red and not switch back, added else to keep it the original color
    if ((this.value.length) > 140) {
      textArea.siblings('div').children('.counter').css('color', '#ff0000');
    } else {
      textArea.siblings('div').children('.counter').css('color', '#545149');
    }
  });

});