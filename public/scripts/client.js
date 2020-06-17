/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
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
    return article
  }
  //Render tweet fucntion, to be used later
  const renderTweets = (tweets) => {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.old-tweet').prepend($tweet);
      console.log($tweet);

    }
  }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
  ]
  renderTweets(data);
});