$(document).ready(function() {
  // --- our code goes here ---
  const textArea = $('#tweet-text');
  const counter = $('.counter');
  textArea.on('keyup', function() {
    // console.log(140 - (this.value.length));
    textArea.siblings('div').children('.counter').val(140 - (this.value.length))
    //The this keyword is a reference to the button
  });

});