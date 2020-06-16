$(document).ready(function() {
  // --- our code goes here ---
  const textArea = $('#tweet-text');
  const counter = $('.counter');
  textArea.on('keydown', function() {
    console.log(counter.value - this.value.length); //The this keyword is a reference to the button
  });
});