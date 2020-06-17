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

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(document).ready(function () {
  renderTweets(data);
  $('form').on('submit', (evt) => {
    evt.preventDefault();
    $.ajax("/tweets", { method: 'POST' , data: $(this).serialize()})
  })
});