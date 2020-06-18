/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//Function has a prerendered html format. It grabs the info from the data of tweet, and places the values of the keys into the assigned locations. For the img, since the key value is a string, and as long as it is a string, the source will still work
const createTweetElement = (data) => {
  const article = `<article class="tweet-container">
    <header class="old-tweet-userinfo">
      <div>
        <img src=${data.user.avatars}>
        <p>${data.user.name}</p>
      </div>
      <p class="Username">${data.user.handle}</p>
    </header>
    <p class="tweet">
      ${data.content.text}
    </p>
    <footer>
      <p class="dateSinceTweet">
        ${data.created_at}
      </p>
    </footer>
  </article>`;
  return article;
};
//Render tweet function uses a helper function to produce the tweet in the proper format, and push them into the html. The classes are predone so CSS can do its job properly"
const renderTweets = (tweets) => {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    //Had an issue where the css style was applied to the article, but it actually needs to be applied to the old tweet section class
    $('.old-tweet').prepend($tweet);
  }
};

const loadTweets = () => {
  //This will retrieve the tweets in the database, and render them with a helper function
  $.ajax('/tweets', { method: 'GET', dataType: 'JSON', success: renderTweets })
};

$(document).ready(function () {
  loadTweets();
  $('form').on('submit', (evt) => {
  //Prevents page refresh
  evt.preventDefault();
  let tweetText = $('#tweet-text').val();
  //Conditional check to verify if Tweet is empty or over the character limit
  if (tweetText === "" || null) {
    alert("You forgot to write your Tweet!")
  } else if (tweetText.length > 140) {
    alert("Your Tweet is too long!")
  } else {
    //Action and method have to match the form that we are grabbing the information from
    //Serialize will turn the form data into a query string
    $.ajax("/tweets", { method: 'POST' , data: $('form').serialize()})
    //Reload tweets, instead of reloading page
    loadTweets();
    //Reset form
    $('#tweet-text').val("")
    }
  })
});