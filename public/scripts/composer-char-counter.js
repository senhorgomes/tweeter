$(document).ready(function() {
  // --- our code goes here ---
  const textArea = $('#tweet-text');
  textArea.on('keydown', function() {
    console.log(this.value.length); //The this keyword is a reference to the button
  });
});